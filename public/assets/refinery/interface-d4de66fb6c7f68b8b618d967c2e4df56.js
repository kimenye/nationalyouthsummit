(function(){this.init_interface=function(){var e;return parent&&parent.document.location.href!==document.location.href&&$("body#dialog_container.dialog").addClass("iframed"),$("input:submit:not(.button)").addClass("button"),$.browser.msie||($("#page_container, .wym_box").corner("5px bottom"),$(".wym_box").corner("5px tr"),$(".field > .wym_box").corner("5px tl"),$(".wym_iframe iframe").corner("2px"),$('.form-actions:not(".form-actions-dialog")').corner("5px")),$("#recent_activity li a, #recent_inquiries li a").each(function(e,t){return $(this).textTruncate({width:$(this).width(),tooltip:!1})}),$("textarea.wymeditor").each(function(){var e,t,n,r;r=$(this);if((e=WYMeditor.INSTANCES[$((r.next(".wym_box").find("iframe").attr("id")||"").split("_")).last().get(0)])!=null){(t=r.parent().next())!=null&&t.length>0&&t.find("input, textarea").keydown($.proxy(function(e){var t;t=e.shiftKey;if(t&&e.keyCode===$.ui.keyCode.TAB)return this._iframe.contentWindow.focus(),e.preventDefault()},e)).keyup(function(e){var t;return t=!1});if((n=r.parent().prev())!=null&&n.length>0)return n.find("input, textarea").keydown($.proxy(function(e){if(e.keyCode===$.ui.keyCode.TAB)return this._iframe.contentWindow.focus(),e.preventDefault()},e))}}),(e=$("#menu")).length>0&&(e.jcarousel({vertical:!1,scroll:1,buttonNextHTML:"<img src='/assets/refinery/carousel-right-f4707b3f57ca4a3c7a3827a880f525a0.png' alt='down' height='15' width='10' />",buttonPrevHTML:"<img src='/assets/refinery/carousel-left-05f0191acbfdd439eb01389086d9aea0.png' alt='up' height='15' width='10' />",listTag:e.get(0).tagName.toLowerCase(),itemTag:e.children(":first").get(0).tagName.toLowerCase()}),e.outerWidth()<$("#page_container").outerWidth()?$("#page_container:not('.login #page_container')").corner("5px tr"):$("#page_container:not('.login #page_container')").uncorner()),$("#current_locale li a").click(function(e){return $("#current_locale li a span").each(function(e){return $(this).css("display",$(this).css("display")==="none"?"":"none")}),$("#other_locales").animate({opacity:"toggle",height:"toggle"},250),$("html,body").animate({scrollTop:$("#other_locales").parent().offset().top},250),e.preventDefault()}),$("#existing_image img").load(function(){return $("form.edit_image .form-actions").css({"margin-top":$("#existing_image").height()-$("form.edit_image").height()+8})}),$(".form-actions .form-actions-left input:submit#submit_button").click(function(e){return $("<img src='/assets/refinery/ajax-loader-2ea0822f065826831f2a7e6ab3f0265e.gif' width='16' height='16' class='save-loader' />").appendTo($(this).parent())}),$(".form-actions.form-actions-dialog .form-actions-left a.close_dialog").click(function(e){var t;return t=$(".ui-dialog-titlebar-close"),parent&&(t=parent.$(".ui-dialog-titlebar-close")),t.trigger("click"),e.preventDefault()}),$("a.suppress").live("click",function(e){return e.preventDefault()})}}).call(this);