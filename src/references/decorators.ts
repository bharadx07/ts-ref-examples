const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

function uniittestclass(property: string, isFunction: boolean, expects: any) {
  const testId = uuidv4()
  return (target: any): void => {
    const instance = new target();
    
    if(isFunction) {  
      const value = instance[property].apply()

      if(value === expects) {
        console.log(`Test with ID ${testId} ran successfully`);
      } else {
        throw new Error(`Test with ID ${testId} failed.`)
      }

    } else {
      const value = instance[property]
      
      if(value === expects) {
        console.log(`Test with ID ${testId} ran successfully`);
      } else {
        throw new Error(`Test with ID ${testId} failed.`)
      }
    }
  }

}

function port(pt: number) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
      console.log(`Starting Server at port ${pt} using handler ${propertyKey}. Config: ${JSON.stringify(descriptor)}`);
  };
}

function print() {
  return (target: any, name: string) => {
    console.log(target, name)
  }
}
  

@uniittestclass("name", true, "Bharadwaj")
class Main {
  name() {
    return "Bharadwaj"
  }

  @print()
  test11111 = 'hey'

  @port(8080)
  start() {
    return "Hey Start Server"
  }
}

