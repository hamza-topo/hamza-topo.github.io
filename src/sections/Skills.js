import React from "react";
import "../css/Skills.css";

const BLOGS_BASE = [
  {
    published: "2026 03 05",
    title: "I built a tiny Linux tool that shouts “FAHH 📢” when I type the wrong command",
    subtitle: "I built a tiny Linux tool that shouts “FAHH” when I type the wrong command",
    desc:
      "A few weeks ago I noticed something about the way I work in the terminal.When I’m focused and typing commands fast, I tend to make a lot of small mistakes.",
    href: "https://dev.to/hamzatopo/i-built-a-tiny-linux-tool-that-shouts-fahh-when-i-type-the-wrong-command-3fio",
  },
  {
    published: "2024 02 06",
    title: "Laravel : DESIGN PATTERN REPOSITORY",
    subtitle: "What it is. Why it matters. How to implement it.",
    desc:
      "I vividly recall my initial encounter with the term \"Design Pattern\" – a moment of profound confusion as I grappled with whether it was a mere philosophical concept or a collection of abstract theories. The burning question in my mind was: how could such a concept be practically applied to something as tangible as my to-do list project 😅?",
    href: "https://dev.to/hamzatopo/laravel-design-pattern-repository-4m7f",
  },
  {
    published: "2024 09 05",
    title: "React js & Github actions",
    subtitle: "A practical guide to deploying your React app to GitHub Pages.",
    desc:
      "Hey there, fellow developers! 🎉 Let's get your React app out into the world! 🚀 Today, we're going to deploy it to GitHub Pages, a super easy way to share your creations with everyone.",
    href: "https://dev.to/hamzatopo/react-js-github-actions-321e",
  },
];

function iconifyUrl(iconName, color) {
  return `https://api.iconify.design/${iconName}.svg?color=${encodeURIComponent(
    color
  )}`;
}

function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function blogMatches(blog, q) {
  if (!q) return true;
  const n = normalize(q);
  const hay = normalize(`${blog.title} ${blog.subtitle} ${blog.desc}`);
  return hay.includes(n);
}

function getSuggestions(blogs, q, limit) {
  if (!q) return [];
  const n = normalize(q);
  const hits = [];

  for (let i = 0; i < blogs.length; i += 1) {
    const b = blogs[i];
    const title = normalize(b.title);
    const subtitle = normalize(b.subtitle);

    // priority: title startsWith, title includes, subtitle includes
    let score = 999;
    if (title.startsWith(n)) score = 0;
    else if (title.includes(n)) score = 1;
    else if (subtitle.includes(n)) score = 2;
    else continue;

    hits.push({ score, title: b.title });
  }

  hits.sort((a, b) => a.score - b.score || a.title.localeCompare(b.title));

  // unique titles
  const uniq = [];
  const seen = new Set();
  for (let i = 0; i < hits.length; i += 1) {
    if (!seen.has(hits[i].title)) {
      seen.add(hits[i].title);
      uniq.push(hits[i].title);
    }
    if (uniq.length >= (limit || 6)) break;
  }
  return uniq;
}

export default function Blogs() {
  const [isDark, setIsDark] = React.useState(() =>
    document.body.classList.contains("dark")
  );

  React.useEffect(() => {
    const sync = () => setIsDark(document.body.classList.contains("dark"));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const iconColor = isDark ? "white" : "black";
  const blogs = BLOGS_BASE.map((b) => ({
    ...b,
    img: iconifyUrl("simple-icons:devdotto", iconColor),
  }));

  // --- Search state
  const [query, setQuery] = React.useState("");
  const [openSuggest, setOpenSuggest] = React.useState(false);
  const [activeSuggest, setActiveSuggest] = React.useState(-1);

  // --- Pagination
  const PAGE_SIZE = 4;
  const [page, setPage] = React.useState(1);

  const filtered = React.useMemo(() => {
    return blogs.filter((b) => blogMatches(b, query));
  }, [blogs, query]);

  React.useEffect(() => {
    // reset to page 1 when query changes
    setPage(1);
    setActiveSuggest(-1);
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageSafe = Math.min(page, totalPages);

  const pageItems = React.useMemo(() => {
    const start = (pageSafe - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, pageSafe]);

  const suggestions = React.useMemo(() => {
    return getSuggestions(blogs, query, 6);
  }, [blogs, query]);

  const onPickSuggestion = (text) => {
    setQuery(text);
    setOpenSuggest(false);
    setActiveSuggest(-1);
  };

  const onKeyDown = (e) => {
    if (!openSuggest && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpenSuggest(true);
      return;
    }

    if (e.key === "Escape") {
      setOpenSuggest(false);
      setActiveSuggest(-1);
      return;
    }

    if (!openSuggest || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggest((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggest((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      if (activeSuggest >= 0) {
        e.preventDefault();
        onPickSuggestion(suggestions[activeSuggest]);
      }
    }
  };

  return (
    <section className="blogs" id="blogs">
      <header className="blogsHeader">
        <div className="blogsHeaderRow">
          <p className="blogsSub">short reads. practical. production-aware.</p>

          <div className="blogSearch" role="search">
            <input
              className="blogSearchInput"
              type="search"
              placeholder="Search blogs…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setOpenSuggest(true)}
              onBlur={() => {
                // small delay so click works
                window.setTimeout(() => setOpenSuggest(false), 120);
              }}
              onKeyDown={onKeyDown}
              aria-label="Search blogs"
              aria-autocomplete="list"
              aria-expanded={openSuggest ? "true" : "false"}
            />

            {query ? (
              <button
                type="button"
                className="blogSearchClear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                title="Clear"
              >
                ×
              </button>
            ) : null}

            {openSuggest && suggestions.length > 0 ? (
              <div className="blogSuggest" role="listbox">
                {suggestions.map((s, idx) => (
                  <button
                    type="button"
                    key={s}
                    className={
                      idx === activeSuggest
                        ? "blogSuggestItem isActive"
                        : "blogSuggestItem"
                    }
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => onPickSuggestion(s)}
                    role="option"
                    aria-selected={idx === activeSuggest ? "true" : "false"}
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="blogSearchMeta">
          <span>
            Showing <b>{filtered.length}</b> result{filtered.length > 1 ? "s" : ""}
            {query ? (
              <>
                {" "}
                for <b>“{query}”</b>
              </>
            ) : null}
          </span>
        </div>
      </header>

      <div className="blogsList">
        {pageItems.map((b) => (
          <a
            key={b.title}
            className="blogBanner"
            href={b.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="blogImgWrap">
              <img src={b.img} alt={b.title} loading="lazy" />
            </div>

            <div className="blogContent">
              <div className="blogTop">
                <h3 className="blogTitle">{b.title}</h3>
                <p className="blogSubtitle">{b.subtitle}</p>
              </div>

              <p className="blogDesc">{b.desc}</p>

              <span className="blogCta">
                read → <span className="blogCtaHint">opens in new tab</span><br></br>
                published: <span className="blogCtaHint">{b.published}</span>
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      <div className="blogPager" aria-label="Blog pagination">
        <button
          type="button"
          className="pagerBtn"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={pageSafe <= 1}
        >
          Prev
        </button>

        <div className="pagerInfo">
          Page <b>{pageSafe}</b> / {totalPages}
        </div>

        <button
          type="button"
          className="pagerBtn"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={pageSafe >= totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}
