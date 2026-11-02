# The Summerland Band website

The band's one-page site and press kit, published free with GitHub Pages at
**https://thesummerlandband.github.io/**.

## Changing the site

Everything you see is in `index.html`, in clearly labeled sections (HEADER, HERO,
AT A GLANCE, LIVE, LISTEN, THE BAND, SET LIST, SHOWS, BOOKING, FOOTER). Colors and
fonts are at the top of `assets/css/site.css`.

The easiest way to make a change is to ask an AI assistant with access to this
repository, in plain words. For example:

- "Add a show on Saturday, December 12 at Buena Onda, Santa Barbara."
- "Replace Bruce's photo with the one I'm attaching."
- "Add this MP3 to the Listen section and call it Summertime."
- "Add a testimonial from the manager at Draughtsmen."

To edit by hand on github.com: open the file, click the pencil icon, make the
change, then click **Commit changes**. The live site updates within a few minutes.

### Common edits

| To change | Do this |
| --- | --- |
| A show | In the SHOWS section, copy one `<li>` line and change the date, venue and place. Newest first. |
| A photo | Upload the new image to `assets/img/` with the same file name, or point the `<img>` at the new name. Photos turn black and white automatically. |
| A recording | Upload the MP3 to `assets/media/`, then copy one `<li class="track">` in the LISTEN section and change the file name, title and length. |
| A video | Upload an MP4 (H.264) to `assets/media/` and copy one `<figure class="video">` in the LIVE section. |
| A quote | In the SHOWS section, copy the `<figure class="quote">` block. Always include who said it. |
| Booking contact | In the BOOKING section, change the email (it appears three times on that line) and the phone. |

## Where the current content came from

- Member bios: the band's bio sheet, posted on Instagram on Feb 12, 2023, lightly edited.
- Booking email and phone: the same bio sheet. Please confirm they are current.
- Show history: the band's Instagram posts, the Draughtsmen Aleworks calendar and
  Instagram, and the band's Facebook event for May 16, 2025.
- Set list: the band's set list for Buena Onda on Sept 12, 2026. Shorthand titles
  were spelled out (for example "Saint James" became "St. James Infirmary").
- Videos and audio: the two live reels on the band's Facebook page.
- Member portraits: stills from the night-set video, matched to each member by
  instrument. Replace them with proper portraits when available.
- Group photos: the band's Facebook page.
- Quote: Draughtsmen Aleworks' Instagram announcement for the Sept 26, 2026 show.

## Files

```
index.html            the page
assets/css/site.css   styles (colors and fonts at the top)
assets/js/site.js     audio player, photo viewer, copy-email button
assets/img/           photos, video posters, icons, share image
assets/media/         live videos (MP4) and audio excerpts (MP3)
```
