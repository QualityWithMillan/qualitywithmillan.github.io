---
search : false

---

First of all **I thank you** ❤️ very much for taking time to contribute ( author /co-author a post with me).

You can follow these simple instructions to publish a post for review:

> If you have no clue how to write post here are all that I have [published](https://github.com/QualityWithMillan/qualitywithmillan.github.io/tree/prod/_posts) in markdowns format `.md` files.
> This has got some example on how you can add hero/baner image etc at top of your post like [this welcome post](https://qualitywithmillan.github.io/welcome.html)..


> > If you decide to add a an image, make sure you also upload that under `\assets\images\` folder.


### Step to contribute 🪜


1. Fork this repository with your GitHub account
    1. If you don't have GitHub account, continue reading...
1.  Create a markdown file (`.md extension`) and put your content in it. All markdown heading, bold, italic, links, `code` formatting are acceptable.
    1. You can use any IDE to preview your content, or
    1. Use one of the online readme editor or [search one on google search](https://www.google.com/search?q=online+readme+editor) to preview your content before sending.
1.  Make sure your post is submitted <ins>**without a date**</ins> in your file name.
    1. So that it looks something like this `my-first-blog-on-christmas.md` (all words in small case, separated by hiphens `-` . No `space` or special characters please)
    1. Once it's reviewed, I will add a date in front of it, something like this:  `YYYY-MM-DD-your-file-name.md` ( e.g. `2022-12-25-my-first-blog-on-christmas.md` )
1.  You can associate your blog with a category 
    1. Make sure to pick **only one** categorie, looking at the published [Categories page](https://qualitywithmillan.github.io/categories/)
    1. You can add a new category if none of thsese suits your work:  `blog` , `post`, `tutorial`, `adventure`, `travel` etc.. 
1.  You can put multiple `tags`to your post, ideally limit them from 3 to 5 for better reader experience.
    1. You can have a look at [all published tags here](https://qualitywithmillan.github.io/tags/)
1. if you want to run locally follow instructions [here](https://mmistakes.github.io/minimal-mistakes/docs/docs-2-2/) or run `bundle install` followed by `bundle exec jekyll serve`. Some helpful troubleshooting below.
1. Or simply run using docker
    1. Create a docker image names **qwm** : `docker build -t qwm .`
    1. run the local server `docker-compose up` or `docker run -p 4000:4000 -v "$PWD:/srv/jekyll" qwm jekyll serve --force_polling`
    1. Go to [http://localhost:4000](http://localhost:4000/)

if you see some errors :
- Remove `Gemfile.lock`
- run `bundle add webrick` [ It seems that in the latest version of ruby that is installed with homebrew webrick is not included by default. ]
- run `bundle`
and again `bundle exec jekyll serve`.

- error     
`Your user account isn't allowed to install to the system RubyGems.`
  You can cancel this installation and run:

  ```
    bundle install --path vendor/bundle
  ```

## Some tips to format your Blog and images

- [Link to useful utility-classes](https://mmistakes.github.io/minimal-mistakes/docs/utility-classes/)
- [Cheat-sheet for using jmoji pluging for emojis on blog](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)
- [Liquid Cheat Sheet](https://www.fabriziomusacchio.com/blog/2021-08-12-Liquid_Cheat_Sheet/#jekylls-link-tag)

1. Once done raise a PR to `prod` branch, or send me the document(s).

I will ( or you can ) add **Author** details about yourself in [authors.yml file](https://github.com/QualityWithMillan/qualitywithmillan.github.io/blob/prod/_data/authors.yml)


Finally, once your work (post) is merged. GitHub actions Will auto-pick new files/changes and published it 🚀. 




> I will keep on improving this document with your feedback.


Once again thank you for your time to sharing Knowledge with the community for free. 🙏

Best

**Millan** 
