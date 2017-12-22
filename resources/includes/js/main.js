$( document ).ready(function() {
	$('.add-image').click(function(){
		var count = 0;
		$('.img-count').each(function( index ) {
			count++;
		})
		if(count < 8) {
			$('.addimage-cont').append("<input type='file' name='image[]' class='img-count'><br><br>");
		} else {
			show_alert("Cannot add more image.");
		}
	});
	$('.remove-img-butt').click(function(){
		var baseUrl = $('.base-url').val();
		var count = 0;
		$('.img-count').each(function( index ) {
			count++;
		})
		if(count == 1) {
			show_alert("<img src='"+baseUrl+"/images/exclamation.png'> Cannot delete image");
			return false;
		} else {
			$(this).parent().find('img').removeClass('img-count');
			$(this).parent().find('.remain-img').prop('disabled','disabled');
			$(this).parent().find('.remove-img').removeProp('disabled');
			$(this).parent().parent().fadeOut();
		}
	});
	$(".logged-user").click(function(e){
		e.preventDefault();
		$('.user-box').slideToggle();
	});
	$(".recent-viewed").click(function(e){
		e.preventDefault();
		$('.recentview-box').slideToggle();
	});
	
	if($('div').hasClass('prod-newform')) {
		$('#cat-group option').removeProp('selected');
	}
	$('#cat-group').change(function(e){
		e.preventDefault();
		var cat  = $('#cat-group option:selected').val();
		if(cat == 4){
			$('.add-term').fadeIn();
		} else {
			$('.add-term').fadeOut();
		}
		var url = $('#subcat-url').val();
		url = url+'/'+cat;
		$.get(url, function(data){
			var cats = '';
			if(data['sub_cat'].length > 0) {
				cats += '<option value="">Select Sub-Category</option>';
				for(i=0; i<data['sub_cat'].length; i++)
				{
					cats +='<option value="'+data['sub_cat'][i]['sub_cat_id']+'">'+data['sub_cat'][i]['subcat_name']+'</option>';
				}
			} else {
				cats +='<option value="">No Other Categories</option>';
			}
			$('.sub-category').html('');
			$('.sub-category').html(cats);
		}, 'json');
	});
	
	if($('div').hasClass('signup-start')){
		$('#country-group').find('option[value="0"]').attr("selected",true);
	}
	if($('div').hasClass('prod-editform')) {
		$('#city-group').prop("disabled","");
		$('#province-group').prop("disabled","");
	}
	$('#country-group').change(function(e){
		e.preventDefault();
		$('#city-group').prop("disabled","");
		var cat  = $('#country-group option:selected').val();
		var url = $('#city-url').val();
		url = url+'/'+cat;
		$.get(url, function(data){
			var cats = '';
			
			if(data['city'].length > 0) {
				cats += '<option value="">Select City</option>';
				for(i=0; i<data['city'].length; i++)
				{
					cats += '<option value="'+data['city'][i]['city_id']+'">'+data['city'][i]['city_name']+'</option>';
				}
			} else {
				cats += '<option value="">No Other City</option>';
			}
			$('.city').html('');
			$('.city').html(cats);
		}, 'json');
	});

	$('#city-group').change(function(e){
		e.preventDefault();
		$('#province-group').prop("disabled","");
		var cat  = $('#city-group option:selected').val();
		var url = $('#province-url').val();
		url = url+'/'+cat;
		$.get(url, function(data){
			var cats = '';
			
			if(data['prov'].length > 0) {
				cats += '<option value="">Select Province</option>';
				for(i=0; i<data['prov'].length; i++)
				{
					cats += '<option value="'+data['prov'][i]['province_id']+'">'+data['prov'][i]['province_name']+'</option>';
				}
			} else {
				cats += '<option value="">No Other Province</option>';
			}
			$('.prov').html('');
			$('.prov').html(cats);
		}, 'json');
	});

	/*$('#company').change(function(e){
		e.preventDefault();
        $('#loader').fadeIn('fast');
		var url = $('#company-branchval-url').val();
		var company = $(this).val();
		if(company == '') company = 'all';
		url = url+'/'+company;
		
		$.get(url, function(data){
			var newbranches = '';
			
			newbranches += '<option value=""></option>';
			//else newbranches += '<option value=""></option><option id="remove-branfilter" value="remove">-Remove Branch Filter By Company-</option>';
			
			for(i=0; i<data['branches'].length; i++)
			{
				newbranches += '<option value="'+data['branches'][i]['BRANCH_CODE']+'_'+company+'">'+data['branches'][i]['BRANCH_CODE']+': '+data['branches'][i]['BRANCH_DESC']+'</option>';
			}
			
			$('#branch').html('');
			$('#branch').html(newbranches);
		}, 'json');
	});*/
	$('.num-only').on('keypress', function(e)
    {
        var char_code = e.keyCode || e.which;

        if (char_code <= 13) return true;
        
        var key_char = String.fromCharCode(char_code);
        var re = /[0-9,.]/

        return re.test(key_char);
    });
	$('.alpha-only').on('keypress', function(e)
    {
        var char_code = e.keyCode || e.which;

        if (char_code <= 13) return true;
        
        var key_char = String.fromCharCode(char_code);
        var re = /[Ñña-zA-Z]/
        
        return re.test(key_char);
    });
    $('.alpha-space-only').on('keypress', function(e)
    {
        var char_code = e.keyCode || e.which;

        if (char_code <= 13) return true;
        
        var key_char = String.fromCharCode(char_code);
        var re = /[\sÑña-zA-Z]/
        
        return re.test(key_char);
    });

    $('.alpha-num-only').on('keypress', function(e)
    {
        var char_code = e.keyCode || e.which;

        if (char_code <= 13) return true;
        
        var key_char = String.fromCharCode(char_code);
        var re = /[Ñña-zA-Z0-9]/
        
        return re.test(key_char);
    });

    $('.alpha-num-space-only').on('keypress', function(e)
    {
        var char_code = e.keyCode || e.which;

        if (char_code <= 13) return true;
        
        var key_char = String.fromCharCode(char_code);
        var re = /[Ñña-zA-Z0-9\s]/
        
        return re.test(key_char);
    });
    $('.email-only').on('keypress', function(e)
    {
        var char_code = e.keyCode || e.which;

        if (char_code <= 13) return true;
        
        var key_char = String.fromCharCode(char_code);
        var re = /[a-zA-Z0-9_\-@\.]/
        
        return re.test(key_char);
    });

	/* Alert Functions */
	$('#form-standard').submit(function(e) 
    {
        e.preventDefault();

        $('#loader').fadeIn('fast');

        $.post($(this).attr('action'), $(this).serialize(), function(data)
        {
        	
            if (((data.sys_msg != null && data.sys_msg != undefined)
                || (data.loc != null && data.loc != undefined)
                || (data.func != null && data.func != undefined)))
            {
                show_alert(data.sys_msg, data.loc, data.func, data.msg_type, data.arg1, data.arg2, data.argx);

            }
        }, 
        'json');
    });  


	$('.send-get').click(function(e)
    {

        var btn = $(this);
        if ( ! btn.attr('url')) return false;
        btn.prop('disabled', true);
		
        $.get(btn.attr('url'), function(data)  {
            btn.prop('disabled', false);
            if ((data.sys_msg != null && data.sys_msg != undefined) 
                || (data.loc != null && data.loc != undefined)
                || (data.func != null && data.func != undefined)
                || (data.msg_type != null && data.msg_type != undefined)
                )
				
                show_alert(data.sys_msg, data.loc, data.func, data.msg_type);
				
				if(data.message != null) {
					$('.preview-box').append('<div style="display:none; " class="cancelx-message">'+data.message+'</div>');
				}
        }, 'json');
    });

	function show_alert(msg, loc, func, type, data1, data2, datax)
	{
		type = typeof type !== 'undefined' || type !== '' ? type : 'alert';
		 
		 $('#loader').fadeOut('fast');

		if (type == 'confirm')
		{
			$('#btn-msg').val('Yes');
			$('#btn-msg-x').val('No').show();

			if (datax != undefined && datax != null && datax != '')
			{
				$('#btn-msg-x').data("argx", datax);
			}
		}
		else
		{
			$('#btn-msg').val('OK');
			$('#btn-msg-x').val('Cancel').hide();
		}

		if (msg != undefined && msg != null && msg != '')
		{
			$('#tams-content').html(msg);
			$('#tams-bg').fadeIn('fast');

			if (func != undefined && func != null && func != '')
			{
				$('#msg-func').val(func);
				$('#msg-func').data("fdata", {first:data1, second:data2});
			}

			if (loc != undefined && loc != null && loc != '')
			{
				$('#msg-loc').val(loc);
			}

			return true;
		}
		
		if (func != undefined && func != null && func != '')
		{
			if (data1 || data2) try { window[func](data1, data2); } catch(e) {}
			else if (data1) try { window[func](data1); } catch(e) {}
			else try { window[func](); } catch(e) {}
		}

		if (loc != undefined && loc != null && loc != '')
		{
			window.location = loc;
		}
		
		setTimeout(function(){
			$('#btn-msg').focus();
		},300);
		
		return true;
	}
    $('#btn-msg').click(function() {
        var func    = $('#msg-func').val();
        var loc     = $('#msg-loc').val();
        var content = $('#tams-content').text();
		
		$('#tams-bg').fadeOut('fast', function()
			{
				$('#msg-content').html('');
				$('body').css('overflow', 'visible');

				if (func != '')
				{
					var arg1 = $('#msg-func').data("fdata").first;
					var arg2 = $('#msg-func').data("fdata").second;

					if (arg1 || arg2) try { window[func](arg1, arg2); } catch(e) {}
					else if (arg1) try { window[func](arg1); } catch(e) {}
					else try { window[func](); } catch(e) {}
				}

				if (loc != '')
				{
					window.location = loc;
				}

				$('#msg-func').val('');
				$('#msg-loc').val('');

				return false;
			});
	});
	
    $('#btn-msg-x').click(function() {				
		$('#tams-bg').fadeOut('slow', function() {
			$('#tams-content').html('');
			$('#msg-loc').val('');
			$('body').css('overflow', 'visible');

			var url = $('#btn-msg-x').data("argx");

			if (url != '' && url != undefined)
			{
				window.location = url;
			}
			
			return false;
		});
	});
	/* Alert Functions End */
	
	
	/*Plugin Functions Start*/
	var lightboxPath = "../../js/slider/lightbox/";
	$("a[rel='products-onsub1']").lightBox({
		imageLoading:lightboxPath+"images/lightbox-ico-loading.gif",
		imageBtnPrev:lightboxPath+"images/lightbox-btn-prev.gif",
		imageBtnNext:lightboxPath+"images/lightbox-btn-next.gif",
		imageBtnClose:lightboxPath+"images/lightbox-btn-close.gif",
		imageBlank:lightboxPath+"images/lightbox-blank.gif",
	});
	var lightboxPath = "../../js/slider/lightbox/";
	$("a[rel='products-onsub2']").lightBox({
		imageLoading:lightboxPath+"images/lightbox-ico-loading.gif",
		imageBtnPrev:lightboxPath+"images/lightbox-btn-prev.gif",
		imageBtnNext:lightboxPath+"images/lightbox-btn-next.gif",
		imageBtnClose:lightboxPath+"images/lightbox-btn-close.gif",
		imageBlank:lightboxPath+"images/lightbox-blank.gif",
	});
	var lightboxPath = "../../js/slider/lightbox/";
	$("a[rel='products-onsub3']").lightBox({
		imageLoading:lightboxPath+"images/lightbox-ico-loading.gif",
		imageBtnPrev:lightboxPath+"images/lightbox-btn-prev.gif",
		imageBtnNext:lightboxPath+"images/lightbox-btn-next.gif",
		imageBtnClose:lightboxPath+"images/lightbox-btn-close.gif",
		imageBlank:lightboxPath+"images/lightbox-blank.gif",
	});
	
	$(".photoslider-bullets").sliderkit({
		auto:true,
		autospeed:4000,
		circular:true,
		shownavitems:5,
		panelfx:"fading",
		panelfxspeed:1000,
		panelfxeasing:"easeOutExpo" // "easeOutExpo", "easeInOutExpo", etc.
	});
	
	$(".carousel-sub").sliderkit({
		auto:false,
		shownavitems:4,
		start:1,
		freeheight: true
	});
	
	$("#carousel-main").sliderkit({
		auto:true,
		autospeed:4000,
		shownavitems:3,
		circular:false,
		fastchange:false,
		scrolleasing:"easeOutExpo", //"easeOutBounce, easeOutBack"
		scrollspeed:500
	});
	
	$(".photosgallery-minimalistic").sliderkit({
		shownavitems:6,
		circular:true,
		navitemshover:false,
		panelfxspeed:400,
		auto:true,
		autostill:true,
		timer:true
	});
	/*Plugin Functions End*/
	
	/*Page Custom Functions Start*/
	$(".cat-more a").click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find('.cat-list').slideToggle();
		
		$(this).toggleClass('showed');

		if($(this).hasClass('showed')) {
			$(this).html('&laquo; Show Less');
		} else {
			$(this).html('Show More &raquo;');
		}
	});
	
	$(".cat-list a").click(function(e) {
		e.preventDefault();
		var currentCat = $(this).text();
		var ahref = $(this).attr("href");

		$(this).parent().parent().parent().find('.current-cat').text(currentCat);
		
		$(this).parent().parent().find('.cat-list').hide();

		$(".cat-more a").removeClass('showed');

		$(".cat-more a").html('Show More &raquo;');


		window.location = ahref;
	});
	
	$(".alpha-regex").change(function(){
		var text = $(this).val();
		if(text.length >= 2 && /^[a-zA-Z]+$/.test(text)) {
			$(this).css('border', '1px solid green');
			$(this).addClass('input-passed');
			$(this).removeClass('input-empty');
			$(this).removeClass('input-failed');
		} else if(text.length == 0) {
			$(this).css('border', '1px solid #dddddd');
			$(this).addClass('input-empty');
			$(this).removeClass('input-passed');
			$(this).removeClass('input-failed');
		} else {
			$(this).css('border', '1px solid red');
			$(this).addClass('input-failed');
			$(this).removeClass('input-passed');
			$(this).removeClass('input-empty');
		}
	}); 
	
	$(".numeric-regex").change(function(){
		var text = $(this).val();
		if(text.length >= 11 && /^[0-9\-\s]+$/.test(text)) {
			$(this).css('border', '1px solid green');
			$(this).addClass('input-passed');
			$(this).removeClass('input-empty');
			$(this).removeClass('input-failed');
		} else if(text.length == 0) {
			$(this).css('border', '1px solid #dddddd');
			$(this).addClass('input-empty');
			$(this).removeClass('input-passed');
			$(this).removeClass('input-failed');
		} else {
			$(this).css('border', '1px solid red');
			$(this).addClass('input-failed');
			$(this).removeClass('input-passed');
			$(this).removeClass('input-empty');
		}
	});
	
	$(".email-regex").change(function(){
		var text = $(this).val();
		if(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/igm.test(text)) {
			$(this).css('border', '1px solid green');
			$(this).addClass('input-passed');
			$(this).removeClass('input-empty');
			$(this).removeClass('input-failed');
		} else if(text.length == 0) {
			$(this).css('border', '1px solid #dddddd');
			$(this).addClass('input-empty');
			$(this).removeClass('input-passed');
			$(this).removeClass('input-failed');
		} else {
			$(this).css('border', '1px solid red');
			$(this).addClass('input-failed');
			$(this).removeClass('input-passed');
			$(this).removeClass('input-empty');
		}
	});
	
	$(".pass-regex").change(function(){
		var text = $(this).val();
		if(text.length >= 6) {
			$(this).css('border', '1px solid green');
			$(this).addClass('input-passed');
			$(this).removeClass('input-empty');
			$(this).removeClass('input-failed');
		} else if(text.length == 0) {
			$(this).css('border', '1px solid #dddddd');
			$(this).addClass('input-empty');
			$(this).removeClass('input-passed');
			$(this).removeClass('input-failed');
		} else {
			$(this).css('border', '1px solid red');
			$(this).addClass('input-failed');
			$(this).removeClass('input-passed');
			$(this).removeClass('input-empty');
		}
	});
	
	$(".pass-regex2").change(function(){
		var text = $('.pass-regex').val();
		var text2 = $(this).val();
		if(text == text2) {
			$(this).css('border', '1px solid green');
			$(this).addClass('input-passed');
			$(this).removeClass('input-empty');
			$(this).removeClass('input-failed');
		} else if(text.length == 0) {
			$(this).css('border', '1px solid #dddddd')
			$(this).addClass('input-empty');
			$(this).removeClass('input-passed');
			$(this).removeClass('input-failed');
		} else {
			$(this).css('border', '1px solid red');
			$(this).addClass('input-failed');
			$(this).removeClass('input-passed');
			$(this).removeClass('input-empty');
		}
	});
	
	$(".submit-reg").click(function(e){
		if($(".reg-form input").hasClass('input-empty') || $(".reg-form input").hasClass('input-failed')) {
			show_alert("All input must be filled-up");
			return false;
		}
		return true;
	});
	
	/*End*/
	
	$('.top-catlist li').click(function(e){
		e.preventDefault();
		$('.top-catlist li').removeClass('active-cat');
		$(this).addClass('active-cat');
	});
	$('.clear-cat').click(function(e){ e.preventDefault(); $('.top-catlist li').removeClass('active-cat'); });
	
	$('.carousel-sub .sliderkit-nav-clip ul li').mouseenter(function(){
		$(this).find('p').animate({
			'bottom':'0px'
		},{
			duration: 200
		});
	}).mouseleave(function(){
		$(this).find('p').animate({
			'bottom':'-50px'
		},{
			duration: 200
		});
	});
	
	$( "#select-first" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow" );
	
	$( "#select-second" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow" );
		
	$( "#select-reg1 select" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow" );
	$( "#select-reg2 select" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow" );
	$( "#select-reg3 select" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow" );
	$( "#select-reg4 select" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow" );
	$( "#select-reg5 select" ).selectmenu().selectmenu( "menuWidget" );
	$( "#select-reg6 select" ).selectmenu().selectmenu( "menuWidget" );
	$( ".cat-levelone" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow300 left" );
	$( ".cat-leveltwo" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow300 left" );
	$( ".places1" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow300 left" );
	$( ".places2" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow300 left" );
	$( ".places3" ).selectmenu().selectmenu( "menuWidget" ).addClass( "overflow300 left" );
	
	if($("div").hasClass("add-form")){
		$(".ui-widget").addClass("left");
	}
	
	 $(".description").htmlarea();
	// $(".contactsell-content").htmlarea();
	 
	 $(".submit-ad").click(function(){
		var cat = $('#cat-group option:selected').val();
		var subCat = $('.sub-category option:selected').val();
		var title = $('.add-title').val();
		var country = $('#country-group option:selected').val();
		var city = $('#city-group option:selected').val();
		var province = $('.prov option:selected').val();
		var price = $('#ad-price').val();
		var image = $('.ad-pics').val();
		
		if(cat == '' || subCat == '' || title == '' || country == '' || city == '' || province == '' || price == '') {
			/*alert('cat'+cat);
			alert('sub'+subCat);
			alert('tit'+title);
			alert('cou'+country);
			alert('cit'+city);
			alert('prov'+province);
			alert('price'+price);*/
			show_alert('You must fill up all the fields.');
			return false;
		}
		if(image == '') {
			show_alert('Atleast one image must be uploaded.');
			return false;
		}
	 });
	 
	 if($('span').hasClass('success')) {
		 var suc = $('.success').text();
		 $('.success').hide();
		 show_alert(suc);
	 }
	 if($('span').hasClass('invalid')) {
		 var suc = $('.invalid').text();
		 $('.invalid').hide();
		 show_alert(suc);
	 }
	setTimeout( function(){
		$('#loader').fadeOut('fast');
	}, 1000);
	
	$('.numberOnly').on('keydown', function(e){
	  if(this.selectionStart || this.selectionStart == 0){
		// selectionStart won't work in IE < 9

		var key = e.which;
		var prevDefault = true;

		var thouSep = ",";  // your seperator for thousands
		var deciSep = ".";  // your seperator for decimals
		var deciNumber = 2; // how many numbers after the comma

		var thouReg = new RegExp(thouSep,"g");
		var deciReg = new RegExp(deciSep,"g");

		function spaceCaretPos(val, cPos){
			/// get the right caret position without the spaces

			if(cPos > 0 && val.substring((cPos-1),cPos) == thouSep)
			cPos = cPos-1;

			if(val.substring(0,cPos).indexOf(thouSep) >= 0){
			cPos = cPos - val.substring(0,cPos).match(thouReg).length;
			}

			return cPos;
		}

		function spaceFormat(val, pos){
			/// add spaces for thousands

			if(val.indexOf(deciSep) >= 0){
				var comPos = val.indexOf(deciSep);
				var int = val.substring(0,comPos);
				var dec = val.substring(comPos);
			} else{
				var int = val;
				var dec = "";
			}
			var ret = [val, pos];

			if(int.length > 3){

				var newInt = "";
				var spaceIndex = int.length;

				while(spaceIndex > 3){
					spaceIndex = spaceIndex - 3;
					newInt = thouSep+int.substring(spaceIndex,spaceIndex+3)+newInt;
					if(pos > spaceIndex) pos++;
				}
				ret = [int.substring(0,spaceIndex) + newInt + dec, pos];
			}
			return ret;
		}

		$(this).on('keyup', function(ev){

			if(ev.which == 8){
				// reformat the thousands after backspace keyup

				var value = this.value;
				var caretPos = this.selectionStart;

				caretPos = spaceCaretPos(value, caretPos);
				value = value.replace(thouReg, '');

				var newValues = spaceFormat(value, caretPos);
				this.value = newValues[0];
				this.selectionStart = newValues[1];
				this.selectionEnd   = newValues[1];
			}
		});

		if((e.ctrlKey && (key == 65 || key == 67 || key == 86 || key == 88 || key == 89 || key == 90)) ||
		   (e.shiftKey && key == 9)) // You don't want to disable your shortcuts!
			prevDefault = false;

		if((key < 37 || key > 40) && key != 8 && key != 9 && prevDefault){
			e.preventDefault();

			if(!e.altKey && !e.shiftKey && !e.ctrlKey){

				var value = this.value;
				if((key > 95 && key < 106)||(key > 47 && key < 58) ||
				  (deciNumber > 0 && (key == 110 || key == 188 || key == 190))){

					var keys = { // reformat the keyCode
					48: 0, 49: 1, 50: 2, 51: 3,  52: 4,  53: 5,  54: 6,  55: 7,  56: 8,  57: 9,
					96: 0, 97: 1, 98: 2, 99: 3, 100: 4, 101: 5, 102: 6, 103: 7, 104: 8, 105: 9,
					110: deciSep, 188: deciSep, 190: deciSep
					};

					var caretPos = this.selectionStart;
					var caretEnd = this.selectionEnd;

					if(caretPos != caretEnd) // remove selected text
					value = value.substring(0,caretPos) + value.substring(caretEnd);

					caretPos = spaceCaretPos(value, caretPos);

					value = value.replace(thouReg, '');

					var before = value.substring(0,caretPos);
					var after = value.substring(caretPos);
					var newPos = caretPos+1;

					if(keys[key] == deciSep && value.indexOf(deciSep) >= 0){
						if(before.indexOf(deciSep) >= 0){ newPos--; }
						before = before.replace(deciReg, '');
						after = after.replace(deciReg, '');
					}
					var newValue = before + keys[key] + after;

					if(newValue.substring(0,1) == deciSep){
						newValue = "0"+newValue;
						newPos++;
					}

					while(newValue.length > 1 && 
					  newValue.substring(0,1) == "0" && newValue.substring(1,2) != deciSep){
						newValue = newValue.substring(1);
						newPos--;
					}

					if(newValue.indexOf(deciSep) >= 0){
						var newLength = newValue.indexOf(deciSep)+deciNumber+1;
						if(newValue.length > newLength){
						newValue = newValue.substring(0,newLength);
						}
					}

					newValues = spaceFormat(newValue, newPos);

					this.value = newValues[0];
					this.selectionStart = newValues[1];
					this.selectionEnd   = newValues[1];
				}
			}
		}

		$(this).on('blur', function(e){

			if(deciNumber > 0){
				var value = this.value;

				var noDec = "";
				for(var i = 0; i < deciNumber; i++)
				noDec += "0";

				if(value == "0"+deciSep+noDec)
				this.value = ""; //<-- put your default value here
				else
				if(value.length > 0){
					if(value.indexOf(deciSep) >= 0){
						var newLength = value.indexOf(deciSep)+deciNumber+1;
						if(value.length < newLength){
						while(value.length < newLength){ value = value+"0"; }
						this.value = value.substring(0,newLength);
						}
					}
					else this.value = value + deciSep + noDec;
				}
			}
		});
	  }
	});
});