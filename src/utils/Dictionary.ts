export interface Component {
  name: string;
  token: string;
  pattern: RegExp;
  suggestedColor?: string;
  input?: string | number;
}

const components: Component[] = [
  {
    name: "Tipo de dato",
    token: "type",
    pattern: /^int$/,
    suggestedColor: "#FBC02D",
  },
  {
    name: "Palabra reservada",
    token: "reservedWord",
    pattern: /^(if|else)$/,
    suggestedColor: "#546E7A",
  },
  {
    name: "Cantidad",
    token: "number",
    pattern: /^[0-9]([0-9])*/,
    suggestedColor: "#2E7D32",
  },
  {
    name: "Identificador",
    token: "identifier",
    pattern: /^([a-z]|[A-Z])([a-z]|[A-Z]|[0-9])*/,
    suggestedColor: "#00B0FF",
  },
  {
    name: "Delimitador",
    token: "delimiter",
    pattern: /^({|}|\[|\]|;|\(|\)){1}/,
    suggestedColor: "#AD1457",
  },
  {
    name: "Operador",
    token: "operator",
    pattern: /^\+|-|\*|\/|<|>|==|!=|=$/,
    suggestedColor: "#6A1B9A",
  },
  {
    name: "Constante",
    token: "constant",
    pattern: /^"([ -~]|ñ| )*"$/,
    suggestedColor: "#00695C",
  },
];

const notFoundComponent: Component = {
  name: "No encontrado",
  token: "notFound",
  pattern: / /,
  suggestedColor: "#000000",
};

export class Dictionary {
  static getComponent<Component>(word: string | number) {
    let componentFound = components.find((component) =>
      word.toString().match(component.pattern)
    );
    if (componentFound) {
      componentFound = { ...componentFound, input: word };
      return componentFound;
    } else return { ...notFoundComponent, input: word };
  }

  static listComponents(): Component[] {
    return components;
  }
}

export default Dictionary;
