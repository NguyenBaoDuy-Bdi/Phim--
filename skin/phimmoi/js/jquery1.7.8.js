(function ($) {
    $.cookie = function (key, value, options) { if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) { options = $.extend({}, options); if (value === null || value === undefined) { options.expires = -1; } if (typeof options.expires === 'number') { var days = options.expires, t = options.expires = new Date(); t.setDate(t.getDate() + days); } value = String(value); return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('')); } options = value || {}; var decode = options.raw ? function (s) { return s; } : decodeURIComponent; var pairs = document.cookie.split('; '); for (var i = 0, pair; pair = pairs[i] && pairs[i].split('=') ; i++) { if (decode(pair[0]) === key) return decode(pair[1] || ''); } return null; };
})(jQuery);
function isEmpty(inputStr) { if (null == inputStr || "" == inputStr) { return true; } return false; }
function randomString(_length) { var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; var _rstr = ''; for (var i = 0; i < _length; i++) { var rnum = Math.floor(Math.random() * chars.length); _rstr += chars.substring(rnum, rnum + 1); } return _rstr; }
function isNumber(_number) { if (_number != "") { if (isNaN(Number(_number))) { return false; } else { return true; } } return false; }
function get_selectbox_text(_id) { var str = ""; str = $(_id + " option:selected").text(); return str; }
var _define_run = 'out001938ywhdeheofgsfwa';
var _define_not_run = 'in001Æ°9uehisohdisasw';