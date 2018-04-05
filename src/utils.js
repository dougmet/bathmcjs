function merge_objects(obj1,obj2)
{
    if (!obj2) return obj1;
    var result = Object.assign({}, obj1);
    for (var key in obj1) 
    {
        if(obj2.hasOwnProperty(key)) {
            if (!(obj1[key] instanceof Array) && 
                typeof(obj1[key]) == 'object') {
                result[key] = merge_objects(obj1[key], obj2[key]);
            }  else {
                result[key] = obj2[key];
            }
        }
    }
    return result;
}

exports.merge_objects = merge_objects;

exports.assert = function (condition, message) {
    // *cough* SO
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}
