document.addEventListener('DOMContentLoaded', function() {
    function rot13(str) {
        return str.replace(/[a-zA-Z]/g, function(chr) {
            var start = chr <= 'Z' ? 65 : 97;
            return String.fromCharCode(start + (chr.charCodeAt(0) - start + 13) % 26);
        });
    }

    function deobfuscate(str) {
        return str.replace(/ \[at\] /, '@').replace(/ \[dot\] /g, '.');
    }

    var mailtos = document.querySelectorAll('a[href^="mailto:"]');
    mailtos.forEach(function(mailto) {
        var original = mailto.href;
        var obfuscated = original.replace('@', ' [at] ').replace(/\./g, ' [dot] ');
        var rot13Encrypted = "mailto:" + rot13(obfuscated.substring(7));
        mailto.href = rot13Encrypted;

        mailto.addEventListener('mouseover', function() {
            mailto.href = "mailto:" + deobfuscate(rot13(rot13Encrypted.substring(7)));
        });

        mailto.addEventListener('mouseout', function() {
            mailto.href = rot13Encrypted;
        });
    });
});
