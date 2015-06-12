<div class="motd">
	<div widget-area="motd"></div>
</div>

<div class="categories" itemscope itemtype="http://www.schema.org/ItemList">
		<!-- BEGIN categories -->
		<a component="categories/category" class="{categories.class} box-50" data-cid="{categories.cid}" data-numRecentReplies="{categories.numRecentReplies}" title="{categories.description}" href="{config.relative_path}/category/{categories.slug}" itemprop="url">
		  <meta itemprop="name" content="{categories.name}">
		  <div class="category-title">
			{categories.name}
            
            <div style="float: right;">
    		  <span class="badge {categories.unread-class}">{categories.totalTopicCount} </span>
    		  <span class="badge {categories.unread-class}">{categories.numRecentReplies} </span>
            </div>
		  </div>
        </a>
		<!-- END categories -->
</div>
