export type AskResponse = {
    answer: string;
    citations: Citation[];
    error?: string;
};

export type Citation = {
    content: string;
    id: string;
    title: string | null;
    filepath: string | null;
    url: string | null;
    metadata: string | null;
    chunk_id: string | null;
    reindex_id: string | null;
}

export type ToolMessageContent = {
    citations: Citation[];
    intent: string;
}

export type ChatMessage = {
  role: string;
  content: string;
  end_turn?: boolean;
  id: string;
  date: string;
  feedback?: Feedback;
  context?: string;
};

export enum Feedback {
  Neutral = "neutral",
  Positive = "positive",
  Negative = "negative",
  MissingCitation = "missing_citation",
  WrongCitation = "wrong_citation",
  OutOfScope = "out_of_scope",
  InaccurateOrIrrelevant = "inaccurate_or_irrelevant",
  OtherUnhelpful = "other_unhelpful",
  HateSpeech = "hate_speech",
  Violent = "violent",
  Sexual = "sexual",
  Manipulative = "manipulative",
  OtherHarmful = "other_harmlful",
}

export enum ChatCompletionType {
  ChatCompletion = "chat.completion",
  ChatCompletionChunk = "chat.completion.chunk",
}

export type ChatResponseChoice = {
    messages: ChatMessage[];
}

export type ChatResponse = {
    id: string;
    model: string;
    created: number;
    object: ChatCompletionType;
    choices: ChatResponseChoice[];
    error: string;
}

export type ConversationRequest = {
    id?: string;
    messages: ChatMessage[];
};

export type Conversation = {
  id: string;
  title: string;
  messages: ChatMessage[];
  date: string;
//   _attachments?: string;
//   _etag?: string;
//   _rid?: string;
//   _self?: string;
//   _ts?: number;
//   createdAt?: string;
//   type: string;
  updatedAt?: string;
//   userId?: string;
};


export enum ChatHistoryLoadingState {
  Loading = 'loading',
  Success = 'success',
  Fail = 'fail',
  NotStarted = 'notStarted'
}


// export type CosmosDBHealth = {
//   cosmosDB: boolean
//   status: string
// }

// export enum CosmosDBStatus {
//   NotConfigured = 'CosmosDB is not configured',
//   NotWorking = 'CosmosDB is not working',
//   InvalidCredentials = 'CosmosDB has invalid credentials',
//   InvalidDatabase = 'Invalid CosmosDB database name',
//   InvalidContainer = 'Invalid CosmosDB container name',
//   Working = 'CosmosDB is configured and working'
// }

// export type FrontendSettings = {
//   auth_enabled?: string | null
//   feedback_enabled?: string | null
//   ui?: UI
//   sanitize_answer?: boolean
// }

export type UI = {
  title: string
  chat_title: string
  chat_description: string
  logo?: string
  chat_logo?: string
  show_share_button?: boolean
}