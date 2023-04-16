module.exports = {

    compare: (options) => {
        console.log('compare init -----------------')
        console.log("COMPARE HELPER", options)

        var rvalue = options.hash.rvalue;
        var lvalue = options.hash.lvalue;
        var operator = options.hash.operator || '==';

        console.log("COMPARE after assingment", lvalue, rvalue, operator)

        if (arguments.length < 3)
            throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
        switch (operator) {
            case '==':
                if (lvalue == rvalue) { return true }
                else { return false }
            case '===':
                if (lvalue === rvalue) { return true }
                else { return false }
            case '!=':
                if (lvalue != rvalue) { return true }
                else { return false }
            case '!==':
                if (lvalue !== rvalue) { return true }
                else { return false }
            case '<':
                if (lvalue < rvalue) { return true }
                else { return false }
            case '>':
                if (lvalue > rvalue) { return true }
                else { return false }
            case '<=':
                if (lvalue <= rvalue) { return true }
                else { return false }
            case '>=':
                if (lvalue >= rvalue) { return true }
                else { return false }
            case 'typeof':
                if (typeof lvalue == rvalue) { return true }
                else { return false }
            default:
                return false;
        }
    }
}








        //     '==': function (l, r) { return l == r; },
        //     '===': function (l, r) { return l === r; },
        //     '!=': function (l, r) { return l != r; },
        //     '!==': function (l, r) { return l !== r; },
        //     '<': function (l, r) { return l < r; },
        //     '>': function (l, r) { return l > r; },
        //     '<=': function (l, r) { return l <= r; },
        //     '>=': function (l, r) { return l >= r; },
        //     'typeof': function (l, r) { return typeof l == r; }
        // };
        // if (!operators[operator])

// I think ive gone too far with this idea.. I need some sleep. when we return, I need to figure out how to get the SINGLE POST.id to the single.js file
// the idea is to create either a helper that will generate the comment form that contains the post.id, or to create a form that will be rendered on the single.js page, that will contain the post.id
