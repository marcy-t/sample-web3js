import React from "react";

class App extends React.Component{
    constructor(props) {
        super(props);
        // thisはこのクラス自信のことを指す。今 AppクラスのOpen stateが trueに設定されます
        // このstateに設定されている値を用いる場合は、this.state.idとすればアクセスできる
        this.state = {
            open: 'pocomaru'
        }
    }
    render(){
        /*
            return以降からはJSXと呼ばれる部分になります
            この部分では、通常の書き方ではJavascriptコードを使用することができない
            そのため、this.state.idの値にアクセスするためには、中括弧{}で指定する
        */
        return (
            <div>
                <h1>
                    Hello World
                </h1>
                <h1>{this.state.id}</h1>
            </div>
        );
    }
}
export default App


/*
    クラスコンポーネント
    Jacascriptのクラスを作成する際に、React.Componentというクラスを継承しています

    その後に、constructorにより、初期値のstateをセットします。
    コンストラクタとは、オブジェクト作成時に実行されるメソッド
    引数の「props」はエクスポートしたAppのコンポーネントを呼び出すときに渡した値が
    代入される変数
    super(props)とすることで、親クラスを継承しています

    「stateとは」~そのなの通り状態のこと
    例）扉コンポーネントというものを考えたときに、「扉が開いているのか」や「閉じているのか」という
    コンポーネントの状態を示すのが「state」

    ボタンコンポーネントでは、「押されたことがある」のか「押されたことがないのか」落ちうものもstateで管理できる
    何回押されたのか？などもstateで管理できます。

    Functionalコンポーネントはクラスコンポーネントと違って、このstateを持つことができません。
    React-hooksなど持ちいればstateを持たせられるが割愛
*/

/*
    propsを引数に持つとは

    Functionalコンポーネントは、propsを引数に持つことができます
    ちなみに、クラスコンポーネントもコンストラクタにpropsを渡すので、
    Functionalコンポーネントだけの機能ではありません
    propsとは、親コンポーネントから渡す値を格納する「箱」のようなもの
*/

/*
    クラスコンポーネントの特徴
    ライフサイクルをもつ
    stateを持つ

    「ライフサイクルを持つ」
    ライフサイクルは、コンポーネントが生まれて、成長し、死ぬまでの循環のこと
    Reactにおいて、このボタンコンポーネントが誕生した瞬間にconstructorが走り、
    stateに値を代入する処理などです
    constructorが走った後は、renderが走ります
    これによりReactが描写され、画面で見ることができます。

    コンポーネントが誕生した後は、度重なるrenderがユーザの操作により発生
    具体的にはrenderは、ユーザーの操作などによりstateが変更されるたびに呼び出される
    これがライフサイクルの成長過程であり、renderされる毎に
    componentDitUpdateという関数が実行されます

    「コンポーネントが死ぬとき」
    ※つまり、アンマウントされる直前に「componentWillUnmount」という関数が実行されまs
    このように、ライフサイクルに合わせてcomponentDidMountなどのメソッドを実行することができ
    これらは、クラスコンポーネントでしか使用することができません
    （React-hooksを使えばFunctionalコンポーネントでも用いることができる）
*/

/*
    ライフサイクルの種類
    「Mounting」「Updating」「Unmounting」

    「Mounting」
    「Mounting」とは、コンポーネントが生まれる時の期間
    この「Mounting」の時に使われるライフサイクすメソッドは、マウントが行われる直前に
    実行されるcomponentWillMountとマウントが実装された直後に実行されるcomponentDidMountです

    Reactのにおける重要な点の一つは、このstateが変更されたときにrenderが走るということ
    つまり、stateが変更されるたびに描画の一部分を再描写して行きます
*/

// https://qiita.com/renesisu727/items/98b308ee72281b6f8066

// const App = (props) => {
//     return (
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     )

// }
// export default App