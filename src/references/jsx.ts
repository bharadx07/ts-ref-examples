declare namespace JSX {
  interface IntrinsicElements {
    foo: any;
  }
}

const testingJSX = <foo />

//Asertations with as
const test = "" as string;

interface FooProp {
  name: string;
  X: number;
  Y: number;
}

declare function AnotherComponent(prop: { name: string }) : any;
function ComponentFoo(prop: FooProp) {
  return <AnotherComponent name={prop.name} />;
}
const Button = (prop: { value: string }, context: { color: string }) => (
  <button />
);

function CustomH1(props: {color: string, size: string, children: any}): JSX.Element {
  return (
  <h1 style={{color: props.color, fontSize: props.size}}>{props.children}</h1>
  )
}


<>
<Button value="f"/>
<ComponentFoo name="" X={1} Y={2}/>
<CustomH1 color="red" size="10rem">hey!</CustomH1>
</>
