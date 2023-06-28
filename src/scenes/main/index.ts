import { Engine, Scene, SceneActivationContext } from 'excalibur';

export default class Main extends Scene {
    public onInitialize(_engine: Engine): void {}
    public onActivate(_context: SceneActivationContext<unknown>): void {}
    public onDeactivate(_context: SceneActivationContext<undefined>): void {}
}