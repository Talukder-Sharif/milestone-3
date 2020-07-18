function feetToMile(feet){
    var mile = feet / 0.00018939;
    return mile;
}
    var destination =[100, 200, 300];
    var distance = feetToMile(destination[1]);
    console.log(distance);




    function woodCalculator(chair, table, bed){
        var chairCount = chair * 1;
        var tableCount = table * 3;
        var bedCount   = bed * 5;
        var totalWood = chairCount + tableCount + bedCount;
        return totalWood;

    }
    var woodResult = woodCalculator(14, 5, 12)
    console.log(woodResult);




    function tinyFriend(names) {
        var tinyFriend = names[0];
        for(var i = 0; i < names.length; i++) {
            var currentName = names[i];
            if(currentName > tinyFriend) {
                tinyFriend = currentName;

            }

        }
        return tinyFriend;
    }
    var smallestName = friends(["fuad", "afsar", "sharif"]);
    console.log(smallestName);
