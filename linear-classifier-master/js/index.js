let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


function drawData(data)
{
    new Rectangle(0,0,500,500,"#dfedff").draw();

    for(let i=0;i<data.inputs.length;i++)
    {
        if(data.outputs[i])
            new Circle(data.inputs[i][0]*25+250,data.inputs[i][1]*25*-1+250,1.5,"#616aff").draw();
        else
            new Circle(data.inputs[i][0]*25+250,data.inputs[i][1]*25*-1+250,1.5,"#ff566f").draw();
    }
    new Line().axis(250);
}
let data=new DataGenerator().generate(100);
function generate()
{
    var dg=new DataGenerator()
    data=dg.generate(100);
    document.getElementById('txtX').value=dg.getVerdadero();
    document.getElementById('txtY').value=dg.getFalso();
}


let p=new Perceptron(2,new Sigmoid());
function learn()
{
    drawData(data);
    p.learn(data.inputs,data.outputs);
    p.draw();
    document.getElementById('txtPrimero').value=p.getPrimero();
    document.getElementById('txtSegundo').value=p.getSegundo();
}





window.setInterval(learn,300);




