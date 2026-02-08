import React from "react";
import "../css/Skills.css";

const BLOGS_BASE = [
  {
    title: "Laravel : DESIGN PATTERN REPOSITORY",
    subtitle: "What it is. Why it matters. How to implement it.",
    desc:
      "I vividly recall my initial encounter with the term \"Design Pattern\" – a moment of profound confusion as I grappled with whether it was a mere philosophical concept or a collection of abstract theories. The burning question in my mind was: how could such a concept be practically applied to something as tangible as my to-do list project 😅?",
    href: "https://dev.to/hamzatopo/laravel-design-pattern-repository-4m7f",
  },
  {
    title: "React js & Github actions",
    subtitle: "A practical guide to deploying your React app to GitHub Pages.",
    desc:
      "Hey there, fellow developers! 🎉 Let's get your React app out into the world! 🚀 Today, we're going to deploy it to GitHub Pages, a super easy way to share your creations with everyone.",
    href: "https://dev.to/hamzatopo/react-js-github-actions-321e",
  },
];

function iconifyUrl(iconName, color) {
  return `https://api.iconify.design/${iconName}.svg?color=${encodeURIComponent(color)}`;
}

export default function Blogs() {
  const [isDark, setIsDark] = React.useState(() =>
    document.body.classList.contains("dark")
  );

  React.useEffect(() => {
    const sync = () => setIsDark(document.body.classList.contains("dark"));

    sync();

    // when your ThemeToggle changes class, we catch it
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => obs.disconnect();
  }, []);

  const iconColor = isDark ? "white" : "black";
  const blogs = BLOGS_BASE.map((b) => ({
    ...b,
    img: iconifyUrl("simple-icons:devdotto", iconColor),
  }));

  return (
    <section className="blogs" id="blogs">
      <header className="blogsHeader">
        <p className="blogsSub">short reads. practical. production-aware.</p>
      </header>

      <div className="blogsList">
        {blogs.map((b) => (
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
                read → <span className="blogCtaHint">opens in new tab</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
