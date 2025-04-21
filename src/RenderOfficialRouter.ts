import {AbstractRouter, Component} from "render-core";
import {RouteGeneric} from "./generic/RouteGeneric";


export class RenderOfficialRouter extends AbstractRouter{
    private config:{
        mode: string,
        table: RouteGeneric[]
    }
    constructor(
        config:{
            mode: string,
            table: RouteGeneric[]
        }
    ) {
        super();

        this.config = config;
    }

    public getPathVariable():Map<string, any>{
        return new Map<string, any>();
    }

    public getComponent(): Component{
        // @ts-ignore
        let component:Component = null;

        for(let i=0; i<this.config.table.length; i++){
            if (this.config.table[i].path === location.pathname){
                component = this.config.table[i].component;
                history.pushState({},"",location.pathname);
                break;
            }
        }
        return component;
    }
}