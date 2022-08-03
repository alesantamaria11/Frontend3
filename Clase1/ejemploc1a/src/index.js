const h_1 = React.createElement(
    "h2",
    {key : 1},
    "¡Hola!"
);

const p_1 = React.createElement(
    "p",
    {key : 2},
    "Hola"
);
/*const s_1 = React.createElement(
    "span",
    {key : 3},
    "Mundo"
);*/
const div_el = React.createElement(
    "div",
    null,
    [h_1,p_1]
);


ReactDOM.render(div_el, document.getElementById("root"));