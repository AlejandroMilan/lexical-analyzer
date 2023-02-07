export interface Component {
  name: string;
  token: string;
  pattern: RegExp;
}

const components: Component[] = [
  {
    name: "Tipo de dato",
    token: "type",
    pattern: /^int$/,
  },
  {
    name: "Palabra reservada",
    token: "reservedWord",
    pattern: /^(if|else)$/,
  },
  {
    name: "Cantidad",
    token: "number",
    pattern: /^[0-9]([0-9])*/,
  },
  {
    name: "Identificador",
    token: "identifier",
    pattern: /^([a-z]|[A-Z])([a-z]|[A-Z]|[0-9])*/,
  },
  {
    name: "Delimitador",
    token: "delimiter",
    pattern: /^{|}|\[|\]|;|\(|\)$/,
  },
  {
    name: "Operador",
    token: "operator",
    pattern: /^\+|-|\*|\/|<|>|==|!=|=$/,
  },
  {
    name: "Constante",
    token: "constant",
    pattern: /^"([ -~]|ñ)*"$/,
  },
];

export class Dictionary {
  static getComponent<Component>(word: string | number) {
    const componentFound = components.find((component) =>
      word.toString().match(component.pattern)
    );
    if (componentFound) return componentFound;
    else throw new Error(`El componente ${word} no existe`);
  }
}

export default Dictionary;
