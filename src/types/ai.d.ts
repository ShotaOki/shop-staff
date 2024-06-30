export interface AITextSession {
  // プロンプトを渡し、AI による回答を取得する
  prompt(text: string): Promise<string>;
  // 結果全体を待つのではなく、ストリーミング形式で結果を取得する
  promptStreaming(text: string): AsyncIterable<string>;
  // プロンプトを渡し、AI による回答を取得する
  execute(text: string): Promise<string>;
  // 結果全体を待つのではなく、ストリーミング形式で結果を取得する
  executeStreaming(text: string): AsyncIterable<string>;
  // セッションを破棄する
  destroy(): void;
}

export interface ModelParameter {
  temperature: number;
  topK: number;
}

export interface AI {
  // モデルが利用可能かどうかの値を返す
  canCreateTextSession(): Promise<"readily" | "after-download" | "no">;
  // プロンプトを実行するオブジェクトを生成する
  createTextSession(): Promise<AITextSession>;
  // モデルが利用可能かどうかの値を返す
  createGenericSession(): Promise<AITextSession>;
  // モデルのパラメータを返す
  defaultTextSessionOptions(): Promise<ModelParameter>;
  // モデルのパラメータを返す
  defaultGenericSessionOptions(): Promise<ModelParameter>;
}
