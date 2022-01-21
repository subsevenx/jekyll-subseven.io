# Asset Include Filter

## Preamble
This import filter allows you to import assets and images. Using it for assets might seem a little weird since it's literally just filling in the blanks for the `<script>` and `<link>` tags. However, I value readability. A project with lots of scripts can get messy to parse when something needs to be replaced. Importing my styles and scripts like this just makes it easier for my eyes. As mentioned, this was written for an e-commerce site and those sites can get *messy*.

## Installation For Your Own Project
Download `assetLoop.liquid` from my [_includes/patterns/](https://github.com/subsevenx/jekyll-subseven.io/tree/main/_includes/patterns) directory and place it in your own `_includes` folder.

## Usage: Images
The main event and original reason why I wrote the filter is to help with images...so let's talk about them.

To use the filter, simply edit `baseImg` variable in the `assetLoop.liquid` file. Only define the *base (parent)* folder.

The filter follows this structure:

```liquid
{% include /patterns/assetLoop.liquid img=true folder="general" file="cat.png" alt="Cat 4" %}
```

### Where...

- `/patterns/assetLoop.liquid` refers to the location of this filter. Mine is in my `_includes` folder under an additional subfolder called `/patterns/`. Replace this with whatever sub-folder you want it in. **Just make sure it's under `/_includes/`** 

- `img=true` tells the filter to use the logic for images instead of the one for CSS or JS. You **must** use this! Don't use quotes around true or it won't work.

- `folder="general"` defines the subfolder from where you are trying to import images from; using the parent folder as a base. You can define subdirectories here if needed. **Quotes around the value are needed.**

- `file="cat.png"` defines the file you are pulling in. Remember the **quotes around the value**.

- `alt` is the standard alt from the HTML tag. Fill in as needed.

Right now this might still seem like a clunkier way of doing what the image tag basically does. While that's true, you can also pass additional values to resize images. Consider the following example!

```html
{% include /patterns/assetLoop.liquid img=true resize=true folder="general" file="cat.png" alt="Cat 3" w=100 h=100 %}
```

This example passes additional parameters: `resize`, `w`, and `h`. `resize` tells the filter that this image will need to be passed to the weserv.nl proxy for processing—in this instance resizing via width (w) and height (h). 

Please refer to the FAQ about how the service works

```html
Test #1: Outputting Remote Image, Resizing <br>
{% include /patterns/assetLoop.liquid img=true resize=true url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png" alt="Cat" w=200 h=200 %}
<br>
Test #2: Outputting Remote Image, No resizing <br>
{% include /patterns/assetLoop.liquid img=true url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/800px-VAN_CAT.png" alt="Cat 2" %}
<br>

Test #3: Outputting Local Image, Resizing <br>
{% include /patterns/assetLoop.liquid img=true resize=true folder="general" file="cat.png" alt="Cat 3" w=100 h=100 %}
<br>

Test #4: Outputting Local Image, No Resizing<br>
{% include /patterns/assetLoop.liquid img=true folder="general" file="cat.png" alt="Cat 4" %}
<br>    
```