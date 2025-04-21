import {RenderOfficialRouter} from "./src/RenderOfficialRouter";
import {AbstractPlugin} from "render-core";
import {PrefaceGeneric} from "render-core/tension/generic/plugin/preface/PrefaceGeneric";
import {HooksGeneric} from "render-core/tension/generic/plugin/hooks/HooksGeneric";
import {RouteGeneric} from "./src/generic/RouteGeneric";
import {OfficialExtTest} from "./src/anonymous/OfficialExtTest";


export class RenderOfficialRouterPlugin implements AbstractPlugin {

    private readonly router: RenderOfficialRouter;

    constructor(
        routerTable:{
            mode: string,
            table: RouteGeneric[]
        }
    ) {
        this.router = new RenderOfficialRouter(routerTable);
    }

    plugin(preface: PrefaceGeneric, hooks: HooksGeneric):void {
        preface.add_system_router(this.router);
        preface.add_anonymous_extension("officialExtTest",new OfficialExtTest());
    }
}
