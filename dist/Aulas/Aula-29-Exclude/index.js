var Colors;
(function (Colors) {
    Colors["Red"] = "#FF0000";
    Colors["Orange"] = "#FFA500";
    Colors["Blue"] = "#0000FF";
    Colors["Green"] = "#008000";
})(Colors || (Colors = {}));
function createMessage(options) {
}
createMessage({
    type: "cold",
    content: "Hello World",
    color: Colors.Blue
});
export {};
