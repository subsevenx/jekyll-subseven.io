# Asset Include Filter

## Preamble
This import filter allows you to import assets and images. Using it for assets might seem a little weird since it's literally just filling in the blanks for the `<script>` and `<link>` tags. However, I value readability. A project with lots of scripts can get messy to parse when something needs to be replaced. Importing my styles and scripts like this just makes it easier for my eyes. As mentioned, this was written for an e-commerce site and those sites can get *messy*.

## Installation For Your Own Project
Download `assetLoop.liquid` from my [_includes/patterns/](https://github.com/subsevenx/jekyll-subseven.io/tree/main/_includes/patterns) directory and place it in your own `_includes` folder.

## Usage: Images
The main event and original reason why I wrote the filter is to help with images...so let's talk about them.

To use the filter, simply edit `baseImg` variable in the `assetLoop.liquid` file. Only define the *base (parent)* folder.

The filter uses the following structure:

```liquid
{% include /patterns/assetLoop.liquid img=true folder="general" file="cat.png" alt="Cat 4" %}
```

### Where...

- `/patterns/assetLoop.liquid` refers to the location of this filter. Mine the `_includes` folder under an additional subfolder called `/patterns/`. Replace this with whatever sub-folder you want it in. **Just make sure it's under `/_includes/`** 

- `img=true` tells the filter to use the logic for images instead of the one for CSS or JS. You **must** use this! Don't use quotes around true or it won't work.

- `folder="general"` defines the subfolder from where you are trying to import images from; using the parent folder as a base. You can define subdirectories here if needed. **Quotes around the value are needed.**

- `file="cat.png"` defines the file you are pulling in. Remember the **quotes around the value**.

- `alt` is the standard alt from the HTML tag. Fill in as needed.

Right now this might still seem like a clunkier way of doing what the image tag basically does. While that's true, you can also pass additional values to resize images. Consider the following example:

```html
{% include /patterns/assetLoop.liquid img=true resize=true folder="general" file="cat.png" alt="Cat 3" w=100 h=100 %}
```

This example passes additional parameters: `resize`, `w`, and `h`. `resize` tells the filter that this image will need to be passed to the weserv.nl proxy for processing—in this instance resizing via width (w) and height (h). In addition, this will also set the width and heigh attributes for your image tag automatically.  

There is a lot of magic to weserv.nl and I encourage you to refer to the [FAQ](https://images.weserv.nl/faq/) for more insight as to how the service works.

For our use case, however, all you need to know is that this automates the syntax required by the service and uses the parameters you define to get the image at the size you need it.

### Remote Images

So far we have only covered converting local images. However, you can also use it to resize images images in other locations (maybe like a CDN or other server.) To do so, simply omit the `folder` and `file` parameters and use `url`. **The value of `url` must be in wrapper in quotation marks**. 

### Additional Parameters

For brevity, here is a complete table that the filter accepts (when used for images).

| Parameter |              Accepted Values             |                                                                             Description                                                                             |
|-----------|:----------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|   `img`   |                  `true`                  | Lets filter know to process images.                                                                                                                                 |
|  `resize` | `true`, nil (when parameter is omitted.) | Lets the filter know this image will be processed by weserv.nl.                                                                                                     |
|    `w`    |           Whole integer values           | Lets the filter know to request image at this width value (in pixels.) Automatically sets `width` attribute of image to input value.                                |
|    `h`    |           Whole integer values           | Lets the filter know to request image at this height value (in pixels.) Automatically sets `height` attribute of image to input value.                              |
|   `file`  |                  String                  | Defines folder where image/s will be called from. Used only with *local* resources. Must be wrapped in double quotation marks. Ommit when using `url`.              |
|  `folder` |                  String                  | Defines folder where image/s will be called from. Used only with *local* resources. Must be wrapped in double quotation marks. Ommit when using `url`.              |
|   `url`   |          URL of remote resource.         | Used only with *remote* resources. Must be wrapped in double quotation marks. When using, do not use define `file` or `folder`.                                     |
|   `cdnP`  |                  String                  | Used to define additional parameters for the weserv.nl service. Must be wrapped in double quotation marks. Must begin with the `&` character and include no spaces. |
