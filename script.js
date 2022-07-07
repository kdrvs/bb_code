const bb_codes = [
    {
        key: 'b',
        openTag: '[b]',
        closeTag: '[/b]',
        openHtml: '<strong>',
        closeHtml: '</strong>'
    },
    {
        key: 'i',
        openTag: '[i]',
        closeTag: '[/i]',
        openHtml: '<em>',
        closeHtml: '</em>'
    },
    {
        key: 'd',
        openTag: '[d]',
        closeTag: '[/d]',
        openHtml: '<del>',
        closeHtml: '</del>'
    },
]

insert_bb = function(textarea_id, key){
    let text_area = document.getElementById(textarea_id);
    let start_carriage = text_area.selectionStart;
    let end_carriage = text_area.selectionEnd;
    let selected_text = text_area.value.substring(start_carriage, end_carriage);
    let bb = bb_codes[bb_codes.findIndex(b => b.key == key)];

    var text = text_area.value.substring(0, start_carriage) + bb.openTag + selected_text + bb.closeTag + text_area.value.substring(end_carriage);

    text_area.value = text;

    text_area.focus();
    text_area.selectionStart = start_carriage + bb.openTag.length;
    text_area.selectionEnd = start_carriage + bb.openTag.length + selected_text.length;
}

parce_bb = function(source_id, parsed_id, html_id){
    
    let text = document.getElementById(source_id).value;
    for(let i = 0; i < bb_codes.length; i++){
        text = text
            .replaceAll(bb_codes[i].openTag, bb_codes[i].openHtml)
            .replaceAll(bb_codes[i].closeTag, bb_codes[i].closeHtml);
    }
    text = text.split('\n', ).join('<br> ');
    
    document.getElementById(parsed_id).innerHTML = text;
    document.getElementById(html_id).innerText = text;
}