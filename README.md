# NDynamicRenderer


It is a library for rendering components of the respective libraries with full life-cycle support for inputs and outputs dynamically.

This library accepts **View** and generates an UI as the following:

![alt text](./screenshots/Expansion%20Panel.png)

![alt text](./screenshots/leaves.png)

**Look at the ['View'](#view) how it is structured**

## Installation

$ npm install n-dynamic-renderer

## Usage

Download the __Case Manager UI Renderer__ from the story

![alt text](./screenshots/store.png)


![alt text](./screenshots/install.png)

Open 'Manage Plugins'->Add Dependency->Enter Package Name,Version,Angular Package, Library name, Module Name and checkon the forRoot() and click on the + button to add the module.

![alt text](./screenshots/add%20dependency.png)

![alt text](./screenshots/forRoot.png)

Create a legacy service 

![alt text](./screenshots/create%20service.png)



Pass the libraryname and its components installed in the applications by preparing the following structure:

```js
[
  {
    library: "Custom Library",
    imports: {
      className: InputClassComponent,
    },
  },
];
```

_In the above configuration,'library' should be the library name .'Imports' is an object of key-value pair where key is the componentName it's value should be the actual component._

_You can prepare as many of an array of objects of library and imports as the following_

```typescript
[
  {
    library: "Neutrinos Library1",
    imports: {
      "InputClassComponent1": InputClassComponent1,
    },
  },
   {
    library: "Neutrinos Library2",
    imports: {
      "InputClassComponent1": InputClassComponent1,
      "CheckBoxComponent": CheckBoxComponent,
      "HomePageComponent": HomePageComponent
    },
  },
];
```


The above configuration can be passed to the library as the following:

```typescript

import * as nComponents from 'n-components';
import * as inputComponent from '../../components/dynamic/input.component'
import * as input1Component from '../../components/dynamic/input1.component'
import {NDynamicRendererModule} from 'n-dynamic-renderer'

@Injectable()
export class dynamicrendererService {
    rendererImports;
    nComponentModules
    constructor(private NDynamicRendererModule: NDynamicRendererModule) {
        this.nComponentModules={...inputComponent,...input1Component}
    }
    
    resetRendererComponents() {
        let config = [
            {
                library: 'n-components',
                imports: { ...nComponents },
            },
            {
                library: 'appComponents',
                imports: {...this.nComponentModules},
            }
        ];
        this.NDynamicRendererModule.resetConfig(config);
        console.log(config)
    }
}

```
Add the above code in the legacy service created

![alt dynamicrendererservice](./screenshots/dynamicrendererservice.png)





---
## Options

- [[(model)]](#model)
- [[view]](#view)
- [[schema]](#schema)
- [(onError)](#onerror)
- [(changeDetection)](#changeDetection)


#### [model]

| Property  | Type   | Required |
| --------- | ------ | -------- |
| [(model)] | object | Required |

Accepts an object which should follow the **_Schema_**.Supports two way data binding as well.

```typescript
[model] = "model";
```
---

#### [view]

| Property | Type  | Required |
| -------- | ----- | -------- |
| [view]   | Array | Required |

**_View_** defines how the UI should render.

Define __view__ in your component's class

```typescript
View = [
   {
      "icon": "",
      "class": "pb2 pr-p3",
      "layout": {
        "tv": {
          "flex": "100"
        },
        "mobile": {
          "flex": "100"
        },
        "tablet": {
          "flex": "100"
        },
        "desktop": {
          "flex": "100"
        }
      },
      "styles": {},
      "expanded": false,
      "sections": [
        {
          "section": {
            "class": "section-card-nm",
            "leafs": [
              {
                "layout": {
                  "tv": {
                    "flex": "30"
                  },
                  "mobile": {
                    "flex": "100"
                  },
                  "tablet": {
                    "flex": "50"
                  },
                  "desktop": {
                    "flex": "30"
                  }
                },
                "styles": {},
                "metadata": {
                  "library": "manulife-components",
                  "options": {
                    "label": "ID Type",
                    "options": [],
                    "model_path": "@client_details.idType",
                    "validations": {
                      "type": "string",
                      "required": true,
                      "dependencyValidations": [
                        {
                          "validations": {
                            "required": true,
                            "idNoLengthCheckValidator": true
                          },
                          "required_value": {
                            "$or": [
                              {
                                "$eq": [
                                  "@client_details.idType",
                                  "1"
                                ]
                              },
                              {
                                "$eq": [
                                  "@client_details.idType",
                                  "7"
                                ]
                              }
                            ]
                          },
                          "target_model_path": "@client_details.idNo",
                          "current_model_path": "@client_details.idType"
                        },
                       
                        {
                          "validations": {
                            "required": true,
                            "maxLength": 20,
                            "noSpecialCharactersValidator": true
                          },
                          "required_value": {
                            "$or": [
                              {
                                "$eq": [
                                  "@client_details.idType",
                                  "2"
                                ]
                              },
                              {
                                "$eq": [
                                  "@client_details.idType",
                                  "3"
                                ]
                              }
                            ]
                          },
                          "target_model_path": "@client_details.idNo",
                          "current_model_path": "@client_details.idType"
                        },
                        {
                          "validations": {
                            "required": true
                          },
                          "required_value": {
                            "$or": [
                              {
                                "$eq": [
                                  "@client_details.idType",
                                  "1"
                                ]
                              }
                            ]
                          },
                          "target_model_path": "@client_details.dateOfIssue",
                          "current_model_path": "@client_details.idType"
                        }
                      ]
                    },
                    "output_events": {
                      "functions": [
                        {
                          "functionName": "modifyValidations"
                        },
                        {
                          "functionName": "idType1validation"
                        }
                      ]
                    },
                    "initialize_functions": {
                      "functions": [
                        {
                          "functionName": "modifyValidations"
                        },
                        {
                          "functionName": "idType1validation"
                        }
                      ]
                    }
                  },
                  "updateOn": "blur",
                  "component_name": "DropDownComponent"
                }
              }
            ],
            "layout": {
              "tv": {
                "flex": "100"
              },
              "mobile": {
                "flex": "100"
              },
              "tablet": {
                "flex": "100"
              },
              "desktop": {
                "flex": "100"
              }
            },
            "styles": {
              "margin": "1em 0em 1em 0em",
              "padding": "1em"
            },
            "section_name": "client_details"
          }
        }
      ],
      "panel_name": "Policy Owner"
    }
]

```

Then add in component's template

```typescript
[view] = "View";
```



Every level in the __View__ has _'styles'_,_'layout'_ and _'class'_ in common where we defines CSS Styles as key value pairs in _styles_ object , add responsive flex properties for mobile,tablet,desktop and tv in _layout_ object ,define classes that are present in the library

* Layout desides the width of the __View__ components on the UI for respective screen resolutions.Set Layout properties accordingly.

 
___

#### [schema]

| Property | Type   | Required |
| -------- | ------ | -------- |
| [schema] | object | Required |

The schema for the **_Model_**.

```typescript
[schema] = "schema";
```

#### onError()

Error handling callback.

| Property  | Type       | Required   |
| --------- | ---------- | ---------- |
| (onError) | _callback_ | _Optional_ |

Define callback in your component's class

```typescript
onError(error: any) {
  // do anything
}
```

Then add in component's template

```typescript
onError = "onError($event)";
```


#### changeDetection()

An event that triggers on change detection in any of the components.

| Property  | Type       | Required   |
| --------- | ---------- | ---------- |
| (changeDetection) | _callback_ | _Optional_ |

Define callback in your component's class

```typescript
changeDetection(event: any) {
  // do anything
}
```

Then add in component's template

```typescript
changeDetection = "changeDetection($event)";
```


## Example

![alt text](./screenshots/renderer.png)


![alt text](./screenshots/component.png)


```typescript
@Component({
  selector: "app-root",
  templateUrl: `
   <n-dynamic-renderer
     [view]="view"
     [(model)]="model"
     [schema]="schema"
     (onError)="onError($event)"
     changeDetection = "changeDetection($event)";
   ></n-dynamic-renderer> 
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  schema = {
    $id: "https://example.com/object1666938433.json",
    title: "Generated schema for Root",
    type: "object",
    properties: {
      case: {
        type: "object",
        properties: {},
      },
    },
  };
  model = {
    case: {},
  };

  view =[
   {
      "icon": "",
      "class": "pb2 pr-p3",
      "layout": {
        "tv": {
          "flex": "100"
        },
        "mobile": {
          "flex": "100"
        },
        "tablet": {
          "flex": "100"
        },
        "desktop": {
          "flex": "100"
        }
      },
      "styles": {},
      "expanded": false,
      "sections": [
        {
          "section": {
            "class": "section-card-nm",
            "leafs": [
              {
                "layout": {
                  "tv": {
                    "flex": "30"
                  },
                  "mobile": {
                    "flex": "100"
                  },
                  "tablet": {
                    "flex": "50"
                  },
                  "desktop": {
                    "flex": "30"
                  }
                },
                "styles": {},
                "metadata": {
                  "library": "manulife-components",
                  "options": {
                    "label": "ID Type",
                    "options": [],
                    "model_path": "@client_details.idType",
                    "validations": {
                      "type": "string",
                      "required": true,
                      "dependencyValidations": [
                        {
                          "validations": {
                            "required": true,
                            "idNoLengthCheckValidator": true
                          },
                          "required_value": {
                            "$or": [
                              {
                                "$eq": [
                                  "@client_details.idType",
                                  "1"
                                ]
                              },
                              {
                                "$eq": [
                                  "@client_details.idType",
                                  "7"
                                ]
                              }
                            ]
                          },
                          "target_model_path": "@client_details.idNo",
                          "current_model_path": "@client_details.idType"
                        },
                       
                        {
                          "validations": {
                            "required": true,
                            "maxLength": 20,
                            "noSpecialCharactersValidator": true
                          },
                          "required_value": {
                            "$or": [
                              {
                                "$eq": [
                                  "@client_details.idType",
                                  "2"
                                ]
                              },
                              {
                                "$eq": [
                                  "@client_details.idType",
                                  "3"
                                ]
                              }
                            ]
                          },
                          "target_model_path": "@client_details.idNo",
                          "current_model_path": "@client_details.idType"
                        },
                        {
                          "validations": {
                            "required": true
                          },
                          "required_value": {
                            "$or": [
                              {
                                "$eq": [
                                  "@client_details.idType",
                                  "1"
                                ]
                              }
                            ]
                          },
                          "target_model_path": "@client_details.dateOfIssue",
                          "current_model_path": "@client_details.idType"
                        }
                      ]
                    },
                    "output_events": {
                      "functions": [
                        {
                          "functionName": "modifyValidations"
                        },
                        {
                          "functionName": "idType1validation"
                        }
                      ]
                    },
                    "initialize_functions": {
                      "functions": [
                        {
                          "functionName": "modifyValidations"
                        },
                        {
                          "functionName": "idType1validation"
                        }
                      ]
                    }
                  },
                  "updateOn": "blur",
                  "component_name": "DropDownComponent"
                }
              }
            ],
            "layout": {
              "tv": {
                "flex": "100"
              },
              "mobile": {
                "flex": "100"
              },
              "tablet": {
                "flex": "100"
              },
              "desktop": {
                "flex": "100"
              }
            },
            "styles": {
              "margin": "1em 0em 1em 0em",
              "padding": "1em"
            },
            "section_name": "client_details"
          }
        }
      ],
      "panel_name": "Policy Owner"
    }
  ];
}
```
