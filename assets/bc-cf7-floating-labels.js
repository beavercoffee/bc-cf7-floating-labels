if('undefined' === typeof(bc_cf7_floating_labels)){
    var bc_cf7_floating_labels = {

    	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        both: function(){
            if(jQuery('.bc-floating-labels > textarea').length){
                jQuery('.bc-floating-labels > textarea').each(function(){
                    bc_cf7_floating_labels.textarea(this);
                });
            }
            if(jQuery('.bc-floating-labels > select').length){
                jQuery('.bc-floating-labels > select').each(function(){
                    bc_cf7_floating_labels.select(this);
                });
            }
        },

    	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        init: function(){
            jQuery(document).on({
                'ready': function(){
                    if(jQuery('.ifwp-floating-labels > textarea').length){
                        jQuery('.ifwp-floating-labels > textarea').each(function(){
                            jQuery(this).data({
                                'border': jQuery(this).outerHeight() - jQuery(this).innerHeight(),
                                'element': jQuery(this).height(),
                                'padding': jQuery(this).innerHeight() - jQuery(this).height(),
                            });
                        });
                    }
                    bc_cf7_floating_labels.both();
                    if(jQuery('.ifwp-floating-labels > textarea').length){
                        jQuery('.ifwp-floating-labels > textarea').on('input propertychange', function(){
                            bc_cf7_floating_labels.textarea(this);
                        });
                    }
                    if(jQuery('.ifwp-floating-labels > select').length){
                        jQuery('.ifwp-floating-labels > select').on('change', function(){
                            bc_cf7_floating_labels.select(this);
                        });
                    }
                },
                bc_cf7_floating_labels.page_visibility_event(): bc_cf7_floating_labels.both,
            });
            jQuery('.wpcf7-form').on('wpcf7reset', bc_cf7_floating_labels.wpcf7reset);
        },

    	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        page_visibility_event: {
            'use strict';
            var visibilityChange = '';
            if(typeof document.hidden !== 'undefined'){ // Opera 12.10 and Firefox 18 and later support
                visibilityChange = 'visibilitychange';
            } else if(typeof document.webkitHidden !== 'undefined'){
                visibilityChange = 'webkitvisibilitychange';
            } else if(typeof document.msHidden !== 'undefined'){
                visibilityChange = 'msvisibilitychange';
            } else if(typeof document.mozHidden !== 'undefined'){ // Deprecated
                visibilityChange = 'mozvisibilitychange';
            }
            return visibilityChange;
        },

    	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        select: function(select){
            if(jQuery(select).val() == ''){
                jQuery(select).removeClass('placeholder-hidden');
            } else {
                jQuery(select).addClass('placeholder-hidden');
            }
        },

    	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        textarea: function(textarea){
            jQuery(textarea).height(parseInt(jQuery(textarea).data('element'))).height(textarea.scrollHeight - parseInt(jQuery(textarea).data('padding')));
        },

    	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        wpcf7reset: function(){
            bc_cf7_floating_labels.both();
        },

    	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    };
}
