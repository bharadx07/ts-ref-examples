declare namespace JSX {
  interface IntrinsicElements {
    foo: any;
    makeOwnIntrinsic: {isCool : boolean, notNeeded ?: boolean}
  }

  interface ElementClass {
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

const propsInObjectForm = {isCool: true}

class ClassReactComponent extends React.Component {
    render() {
        return (
            <div>hey!</div>
        )
    }
}

class ClassComponentWithProps extends React.Component<{message: string}> {
  render() {
    return (
      <div> Message Is {this.props.message}</div>
    )
  }
}

function ChildrenChecking(props: {children: (a: string) => JSX.Element}) {
  return (
    <div>
      {props.children("Hey!")}
    </div>
  )
}

<main>
<ClassReactComponent />
<makeOwnIntrinsic isCool notNeeded={false}/>
<makeOwnIntrinsic {...propsInObjectForm}/>
<ClassComponentWithProps message="Hello World!!"/>
<ChildrenChecking>
  {(a) => {
    return (
      <div>Hey the message is ${a}</div>
    )
  }}
</ChildrenChecking>
</main>

// React Integation
/// <reference path="react.d.ts" />
interface Props {
  foo: string;
}
class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>;
  }
}
<MyComponent foo="bar" />; // ok
