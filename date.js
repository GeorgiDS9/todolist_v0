
// we can write "module.exports.getDate = ..." or just "exports.getDate = ..."

module.exports.getDate = function() {

    const today = new Date();

    // Instead of using switch statements for each day of the week, we can use js.

    //  Create js objects

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);  // use "options" to format our date

};

