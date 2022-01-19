require "jekyll-spark"

module Jekyll
    class ComponentName < ComponentTag
        def template(context)
            render = %Q[

            ]
        end
    end
end
    
Liquid::Template.register_tag(
    "Component",
    Jekyll::ComponentName,
)
