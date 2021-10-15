function inspect(string, array) {
    return array.some((output) =>
        string.toLowerCase().includes(
            output.toLowerCase()
        )
    );
}

function censor(data) {
    let vulgar_words = [
        'fuck',
        'fucker',
        'shit',
        'piss',
        'bitch',
        'bastard',
        'twat',
        'cibai',
        'lancao',
        'babi',
        'keling',
        'asshole',
        'damn',
        'cunt',
        'hell'
    ];

    if (inspect(data, vulgar_words)) {
        return ('--CENSORED--');
    } else {
        return (data);
    }
}

export {
    censor,
}