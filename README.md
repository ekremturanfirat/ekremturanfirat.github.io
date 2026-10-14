# ekremturanfirat.com

Plain HTML + CSS. No frameworks, no build step. Push to `main` and GitHub Pages publishes it.

## Structure

```
style.css                 ← the only stylesheet, shared by every page
index.html                ← home
cv/index.html
projects/index.html
repositories/index.html
blog/index.html           ← list of posts
blog/<PostName>/index.html
```

Every page has the same three parts: `<header class="site-header">` (top menu),
`<main class="container">` (the content) and `<footer class="site-footer">`.
To make a new page, copy an existing one and only change what is inside `<main>`.

In the top menu, mark the current page with `aria-current="page"`:

```html
<a href="/blog/" aria-current="page">Blog</a>
```

## Add a blog post

1. Copy a post folder, e.g. `blog/WhoAmI/` → `blog/MyNewPost/`.
2. In the new `index.html`, change `<title>`, `<h1>`, the date in `<p class="post-meta">`
   and write the text between `</header>` and `<section class="comments">`.
3. Add it to the top of `blog/index.html`:

```html
<article class="post-item">
    <span class="date">01.01.2027</span>
    <h2><a href="/blog/MyNewPost/">My New Post</a></h2>
    <p>One sentence about the post.</p>
</article>
```

Useful things inside a post:

```html
<img src="photo.jpg" alt="what the photo shows">
<p class="caption">Photo source: ...</p>

<div class="media">                <!-- text next to an image -->
    <div><p>Text...</p></div>
    <img src="photo.jpg" alt="...">
</div>

<div class="table-wrap">           <!-- tables scroll sideways on phones -->
    <table>
        <thead><tr><th>Column</th><th>Column</th></tr></thead>
        <tbody><tr><td>Value</td><td>Value</td></tr></tbody>
    </table>
</div>
```

## Add a CV / project / repository item

Copy one `<div class="entry">` block and edit it:

```html
<div class="entry">
    <div class="entry-head">
        <h3>Title</h3>
        <span class="date">January 2027 – Ongoing</span>
    </div>
    <p class="entry-meta"><a href="https://...">Organization</a> · City</p>
    <p>Short description.</p>
</div>
```

Add `<span class="badge">Ongoing</span>` after a title for a small label.

## Change colors

All colors are at the top of `style.css` (`:root` for light mode, the
`prefers-color-scheme: dark` block for dark mode). `--accent` is the link/highlight color.

## Preview locally

Pages use paths like `/style.css`, so open them through a small local server
instead of double-clicking the file:

```
python -m http.server 8000
```

Then visit http://localhost:8000
