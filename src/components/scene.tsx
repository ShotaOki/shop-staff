import { SceneViewer } from "@iot-app-kit/scene-composer";
import {
  useOverrideTags,
  DirectSceneLoader,
  ButtonStyle,
  proxyFetch,
} from "@iak-extra/scene-composer-extra";
import { useMemo } from "react";
import Items from "../state/store-items.json";
import {
  colorChartsOrange1200,
  colorChartsOrange300,
  colorChartsBlue1900,
} from "@cloudscape-design/design-tokens";

export default function Scene() {
  /** ローカルからシーンを読み込みます */
  const sceneLoader = useMemo(
    () =>
      new DirectSceneLoader(
        import.meta.env.VITE_APP_DEPLOYMENT_ROOT + "/single-content.json"
      ),
    []
  );

  /** TwinMakerのタグを上書きする */
  const controller = useOverrideTags({
    // TwinMakerのタグをボタンに置き換える
    壁のボタン: (replaceTag) =>
      replaceTag.toHTML?.create({
        angle: 90,
        element: (
          <div
            style={{
              backgroundColor: colorChartsOrange1200,
              color: colorChartsOrange300,
              fontSize: "2.8rem",
              padding: "1.2rem",
              borderRadius: "1.2rem",
              borderStyle: "solid",
              borderColor: colorChartsBlue1900,
              borderWidth: "2px",
              fontFamily: "Yomogi",
              fontWeight: 900,
              fontStyle: "normal",
            }}
          >
            <div style={{ marginBottom: "0.8rem" }}>カフェうさだのメニュー</div>
            {Items.items.map((item) => (
              <div>
                {item.name}: {item.price}円
              </div>
            ))}
          </div>
        ),
      }),
    // TwinMakerのタグをボタンに置き換える
    初音ミク: (replaceTag) =>
      replaceTag.toMMD
        ?.create({
          angle: 7,
          scale: 0.08,
          pmxPath:
            import.meta.env.VITE_APP_DEPLOYMENT_ROOT +
            "/example/UsadaPekora/PMX/UsadaPekora.pmx",
          useMotionList: {
            waiting:
              import.meta.env.VITE_APP_DEPLOYMENT_ROOT +
              "/example/motion/5.待機モーション・その他/待機モーション/1.呼吸_(90f_移動なし).vmd",
            swing_hand:
              import.meta.env.VITE_APP_DEPLOYMENT_ROOT +
              "/example/motion/手を振るモーション2/手振_手挙手首(右手).vmd",
            swing_body:
              import.meta.env.VITE_APP_DEPLOYMENT_ROOT +
              "/example/motion/手を振るモーション2/体_手前(右手用).vmd",
            face:
              import.meta.env.VITE_APP_DEPLOYMENT_ROOT +
              "/example/motion/手を振るモーション2/表情.vmd",
          },
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .onStateChangeEvent((mesh, model, state) => {
          // 初期化の完了時、またはタグの色がiotデータで変わった時に、通知を受けます
          // useMotionListで指定したモーション名を返すと、MMDのモーションを再生します
          // return ["swing_hand", "swing_body", "face"];
          return ["waiting", "face"];
        }),
    部屋: (replaceTag) =>
      replaceTag.toGLTF?.create({
        angle: 0,
        modelPath:
          import.meta.env.VITE_APP_DEPLOYMENT_ROOT +
          "/example/studio_apartment_vray_baked_textures_included.glb",
      }),
  });
  // シーンの再生成を抑えるために、Memo化します
  // ※イベント（例：onWidgetClick）がないのなら、Memo化しなくても問題ありません
  const scene = useMemo(
    () => (
      <SceneViewer
        sceneComposerId={controller.composerId}
        sceneLoader={sceneLoader}
        activeCamera="Camera1"
      />
    ),
    [controller.composerId, sceneLoader]
  );
  return (
    <div style={{ width: "100%", height: "calc(100vh - 2px)" }}>{scene}</div>
  );
}
