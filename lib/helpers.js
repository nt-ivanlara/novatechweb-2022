export function toLowerJsonProps(json) {
    const response = JSON.parse(json, function (prop, value) {
        var lower = prop.toLowerCase();
        if (prop === lower) return value;
        else this[lower] = value;
    });

    return response;
}

export function splitToChunks(array, parts) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    
    return result;
}
