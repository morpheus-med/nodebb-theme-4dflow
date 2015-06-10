<div class="motd">
	<div widget-area="motd"></div>
</div>

<div class="categories" itemscope itemtype="http://www.schema.org/ItemList">
		<!-- BEGIN categories -->
		<div component="categories/category" class="{categories.class} box-50" data-cid="{categories.cid}" data-numRecentReplies="{categories.numRecentReplies}" title="{categories.description}">
		    <meta itemprop="name" content="{categories.name}">
			<div class="category-title">
				<!-- IF categories.link -->
				<a href="{categories.link}" itemprop="url" target="_blank">
				<!-- ELSE -->
				<a href="{config.relative_path}/category/{categories.slug}" itemprop="url">
				<!-- ENDIF categories.link -->
				{categories.name}
				</a>

				<!-- IF !categories.link -->
                <div style="float: right;">
			    <span class="badge {categories.unread-class}">{categories.totalTopicCount} </span>
			    <span class="badge {categories.unread-class}">{categories.numRecentReplies} </span>
                </div>
				<!-- ENDIF !categories.link -->
			</div>
		</div>
		<!-- END categories -->
</div>
