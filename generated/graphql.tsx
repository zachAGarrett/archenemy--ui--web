import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  _Any: { input: any; output: any };
  federation__FieldSet: { input: any; output: any };
  link__Import: { input: any; output: any };
};

export type Archer = Enemy | User;

export type ArcherWhere = {
  Enemy?: InputMaybe<EnemyWhere>;
  User?: InputMaybe<UserWhere>;
};

export type Arrow = {
  __typename?: "Arrow";
  angle?: Maybe<Scalars["Float"]["output"]>;
  archer: Archer;
  archerConnection: ArrowArcherConnection;
  comments: Array<Comment>;
  commentsAggregate?: Maybe<ArrowCommentCommentsAggregationSelection>;
  commentsConnection: ArrowCommentsConnection;
  coordinate?: Maybe<CartesianPoint>;
  id: Scalars["ID"]["output"];
  notes: Array<Note>;
  notesAggregate?: Maybe<ArrowNoteNotesAggregationSelection>;
  notesConnection: ArrowNotesConnection;
  number: Scalars["Int"]["output"];
  offset?: Maybe<Scalars["Float"]["output"]>;
  set: Set;
  setAggregate?: Maybe<ArrowSetSetAggregationSelection>;
  setConnection: ArrowSetConnection;
  value?: Maybe<Scalars["Int"]["output"]>;
};

export type ArrowArcherArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ArcherWhere>;
};

export type ArrowArcherConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ArrowArcherConnectionWhere>;
};

export type ArrowCommentsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type ArrowCommentsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CommentWhere>;
};

export type ArrowCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<ArrowCommentsConnectionSort>>;
  where?: InputMaybe<ArrowCommentsConnectionWhere>;
};

export type ArrowNotesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<NoteOptions>;
  where?: InputMaybe<NoteWhere>;
};

export type ArrowNotesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<NoteWhere>;
};

export type ArrowNotesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<ArrowNotesConnectionSort>>;
  where?: InputMaybe<ArrowNotesConnectionWhere>;
};

export type ArrowSetAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SetWhere>;
};

export type ArrowSetConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<ArrowSetConnectionSort>>;
  where?: InputMaybe<ArrowSetConnectionWhere>;
};

export type ArrowAggregateSelection = {
  __typename?: "ArrowAggregateSelection";
  angle: FloatAggregateSelection;
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  number: IntAggregateSelection;
  offset: FloatAggregateSelection;
  value: IntAggregateSelection;
};

export type ArrowArcherConnectInput = {
  Enemy?: InputMaybe<ArrowArcherEnemyConnectFieldInput>;
  User?: InputMaybe<ArrowArcherUserConnectFieldInput>;
};

export type ArrowArcherConnectOrCreateInput = {
  User?: InputMaybe<ArrowArcherUserConnectOrCreateFieldInput>;
};

export type ArrowArcherConnection = {
  __typename?: "ArrowArcherConnection";
  edges: Array<ArrowArcherRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type ArrowArcherConnectionWhere = {
  Enemy?: InputMaybe<ArrowArcherEnemyConnectionWhere>;
  User?: InputMaybe<ArrowArcherUserConnectionWhere>;
};

export type ArrowArcherCreateFieldInput = {
  Enemy?: InputMaybe<ArrowArcherEnemyCreateFieldInput>;
  User?: InputMaybe<ArrowArcherUserCreateFieldInput>;
};

export type ArrowArcherCreateInput = {
  Enemy?: InputMaybe<ArrowArcherEnemyFieldInput>;
  User?: InputMaybe<ArrowArcherUserFieldInput>;
};

export type ArrowArcherDeleteInput = {
  Enemy?: InputMaybe<ArrowArcherEnemyDeleteFieldInput>;
  User?: InputMaybe<ArrowArcherUserDeleteFieldInput>;
};

export type ArrowArcherDisconnectInput = {
  Enemy?: InputMaybe<ArrowArcherEnemyDisconnectFieldInput>;
  User?: InputMaybe<ArrowArcherUserDisconnectFieldInput>;
};

export type ArrowArcherEnemyConnectFieldInput = {
  connect?: InputMaybe<EnemyConnectInput>;
  where?: InputMaybe<EnemyConnectWhere>;
};

export type ArrowArcherEnemyConnectionWhere = {
  AND?: InputMaybe<Array<ArrowArcherEnemyConnectionWhere>>;
  NOT?: InputMaybe<ArrowArcherEnemyConnectionWhere>;
  OR?: InputMaybe<Array<ArrowArcherEnemyConnectionWhere>>;
  node?: InputMaybe<EnemyWhere>;
};

export type ArrowArcherEnemyCreateFieldInput = {
  node: EnemyCreateInput;
};

export type ArrowArcherEnemyDeleteFieldInput = {
  delete?: InputMaybe<EnemyDeleteInput>;
  where?: InputMaybe<ArrowArcherEnemyConnectionWhere>;
};

export type ArrowArcherEnemyDisconnectFieldInput = {
  disconnect?: InputMaybe<EnemyDisconnectInput>;
  where?: InputMaybe<ArrowArcherEnemyConnectionWhere>;
};

export type ArrowArcherEnemyFieldInput = {
  connect?: InputMaybe<ArrowArcherEnemyConnectFieldInput>;
  create?: InputMaybe<ArrowArcherEnemyCreateFieldInput>;
};

export type ArrowArcherEnemyUpdateConnectionInput = {
  node?: InputMaybe<EnemyUpdateInput>;
};

export type ArrowArcherEnemyUpdateFieldInput = {
  connect?: InputMaybe<ArrowArcherEnemyConnectFieldInput>;
  create?: InputMaybe<ArrowArcherEnemyCreateFieldInput>;
  delete?: InputMaybe<ArrowArcherEnemyDeleteFieldInput>;
  disconnect?: InputMaybe<ArrowArcherEnemyDisconnectFieldInput>;
  update?: InputMaybe<ArrowArcherEnemyUpdateConnectionInput>;
  where?: InputMaybe<ArrowArcherEnemyConnectionWhere>;
};

export type ArrowArcherRelationship = {
  __typename?: "ArrowArcherRelationship";
  cursor: Scalars["String"]["output"];
  node: Archer;
};

export type ArrowArcherUpdateInput = {
  Enemy?: InputMaybe<ArrowArcherEnemyUpdateFieldInput>;
  User?: InputMaybe<ArrowArcherUserUpdateFieldInput>;
};

export type ArrowArcherUserConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  where?: InputMaybe<UserConnectWhere>;
};

export type ArrowArcherUserConnectOrCreateFieldInput = {
  onCreate: ArrowArcherUserConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type ArrowArcherUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type ArrowArcherUserConnectionWhere = {
  AND?: InputMaybe<Array<ArrowArcherUserConnectionWhere>>;
  NOT?: InputMaybe<ArrowArcherUserConnectionWhere>;
  OR?: InputMaybe<Array<ArrowArcherUserConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type ArrowArcherUserCreateFieldInput = {
  node: UserCreateInput;
};

export type ArrowArcherUserDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<ArrowArcherUserConnectionWhere>;
};

export type ArrowArcherUserDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<ArrowArcherUserConnectionWhere>;
};

export type ArrowArcherUserFieldInput = {
  connect?: InputMaybe<ArrowArcherUserConnectFieldInput>;
  connectOrCreate?: InputMaybe<ArrowArcherUserConnectOrCreateFieldInput>;
  create?: InputMaybe<ArrowArcherUserCreateFieldInput>;
};

export type ArrowArcherUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type ArrowArcherUserUpdateFieldInput = {
  connect?: InputMaybe<ArrowArcherUserConnectFieldInput>;
  connectOrCreate?: InputMaybe<ArrowArcherUserConnectOrCreateFieldInput>;
  create?: InputMaybe<ArrowArcherUserCreateFieldInput>;
  delete?: InputMaybe<ArrowArcherUserDeleteFieldInput>;
  disconnect?: InputMaybe<ArrowArcherUserDisconnectFieldInput>;
  update?: InputMaybe<ArrowArcherUserUpdateConnectionInput>;
  where?: InputMaybe<ArrowArcherUserConnectionWhere>;
};

export type ArrowCommentCommentsAggregationSelection = {
  __typename?: "ArrowCommentCommentsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ArrowCommentCommentsNodeAggregateSelection>;
};

export type ArrowCommentCommentsNodeAggregateSelection = {
  __typename?: "ArrowCommentCommentsNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type ArrowCommentsAggregateInput = {
  AND?: InputMaybe<Array<ArrowCommentsAggregateInput>>;
  NOT?: InputMaybe<ArrowCommentsAggregateInput>;
  OR?: InputMaybe<Array<ArrowCommentsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<ArrowCommentsNodeAggregationWhereInput>;
};

export type ArrowCommentsConnectFieldInput = {
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<CommentConnectWhere>;
};

export type ArrowCommentsConnection = {
  __typename?: "ArrowCommentsConnection";
  edges: Array<ArrowCommentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type ArrowCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type ArrowCommentsConnectionWhere = {
  AND?: InputMaybe<Array<ArrowCommentsConnectionWhere>>;
  NOT?: InputMaybe<ArrowCommentsConnectionWhere>;
  OR?: InputMaybe<Array<ArrowCommentsConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type ArrowCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type ArrowCommentsDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<ArrowCommentsConnectionWhere>;
};

export type ArrowCommentsDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<ArrowCommentsConnectionWhere>;
};

export type ArrowCommentsFieldInput = {
  connect?: InputMaybe<Array<ArrowCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<ArrowCommentsCreateFieldInput>>;
};

export type ArrowCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArrowCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ArrowCommentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ArrowCommentsNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowCommentsRelationship = {
  __typename?: "ArrowCommentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type ArrowCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type ArrowCommentsUpdateFieldInput = {
  connect?: InputMaybe<Array<ArrowCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<ArrowCommentsCreateFieldInput>>;
  delete?: InputMaybe<Array<ArrowCommentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ArrowCommentsDisconnectFieldInput>>;
  update?: InputMaybe<ArrowCommentsUpdateConnectionInput>;
  where?: InputMaybe<ArrowCommentsConnectionWhere>;
};

export type ArrowConnectInput = {
  archer?: InputMaybe<ArrowArcherConnectInput>;
  comments?: InputMaybe<Array<ArrowCommentsConnectFieldInput>>;
  notes?: InputMaybe<Array<ArrowNotesConnectFieldInput>>;
  set?: InputMaybe<ArrowSetConnectFieldInput>;
};

export type ArrowConnectOrCreateInput = {
  archer?: InputMaybe<ArrowArcherConnectOrCreateInput>;
};

export type ArrowConnectWhere = {
  node: ArrowWhere;
};

export type ArrowCreateInput = {
  angle?: InputMaybe<Scalars["Float"]["input"]>;
  archer?: InputMaybe<ArrowArcherCreateInput>;
  comments?: InputMaybe<ArrowCommentsFieldInput>;
  coordinate?: InputMaybe<CartesianPointInput>;
  notes?: InputMaybe<ArrowNotesFieldInput>;
  number: Scalars["Int"]["input"];
  offset?: InputMaybe<Scalars["Float"]["input"]>;
  set?: InputMaybe<ArrowSetFieldInput>;
  value?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowDeleteInput = {
  archer?: InputMaybe<ArrowArcherDeleteInput>;
  comments?: InputMaybe<Array<ArrowCommentsDeleteFieldInput>>;
  notes?: InputMaybe<Array<ArrowNotesDeleteFieldInput>>;
  set?: InputMaybe<ArrowSetDeleteFieldInput>;
};

export type ArrowDisconnectInput = {
  archer?: InputMaybe<ArrowArcherDisconnectInput>;
  comments?: InputMaybe<Array<ArrowCommentsDisconnectFieldInput>>;
  notes?: InputMaybe<Array<ArrowNotesDisconnectFieldInput>>;
  set?: InputMaybe<ArrowSetDisconnectFieldInput>;
};

export type ArrowEdge = {
  __typename?: "ArrowEdge";
  cursor: Scalars["String"]["output"];
  node: Arrow;
};

export type ArrowNoteNotesAggregationSelection = {
  __typename?: "ArrowNoteNotesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ArrowNoteNotesNodeAggregateSelection>;
};

export type ArrowNoteNotesNodeAggregateSelection = {
  __typename?: "ArrowNoteNotesNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type ArrowNotesAggregateInput = {
  AND?: InputMaybe<Array<ArrowNotesAggregateInput>>;
  NOT?: InputMaybe<ArrowNotesAggregateInput>;
  OR?: InputMaybe<Array<ArrowNotesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<ArrowNotesNodeAggregationWhereInput>;
};

export type ArrowNotesConnectFieldInput = {
  connect?: InputMaybe<Array<NoteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<NoteConnectWhere>;
};

export type ArrowNotesConnection = {
  __typename?: "ArrowNotesConnection";
  edges: Array<ArrowNotesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type ArrowNotesConnectionSort = {
  node?: InputMaybe<NoteSort>;
};

export type ArrowNotesConnectionWhere = {
  AND?: InputMaybe<Array<ArrowNotesConnectionWhere>>;
  NOT?: InputMaybe<ArrowNotesConnectionWhere>;
  OR?: InputMaybe<Array<ArrowNotesConnectionWhere>>;
  node?: InputMaybe<NoteWhere>;
};

export type ArrowNotesCreateFieldInput = {
  node: NoteCreateInput;
};

export type ArrowNotesDeleteFieldInput = {
  delete?: InputMaybe<NoteDeleteInput>;
  where?: InputMaybe<ArrowNotesConnectionWhere>;
};

export type ArrowNotesDisconnectFieldInput = {
  disconnect?: InputMaybe<NoteDisconnectInput>;
  where?: InputMaybe<ArrowNotesConnectionWhere>;
};

export type ArrowNotesFieldInput = {
  connect?: InputMaybe<Array<ArrowNotesConnectFieldInput>>;
  create?: InputMaybe<Array<ArrowNotesCreateFieldInput>>;
};

export type ArrowNotesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArrowNotesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ArrowNotesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ArrowNotesNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowNotesRelationship = {
  __typename?: "ArrowNotesRelationship";
  cursor: Scalars["String"]["output"];
  node: Note;
};

export type ArrowNotesUpdateConnectionInput = {
  node?: InputMaybe<NoteUpdateInput>;
};

export type ArrowNotesUpdateFieldInput = {
  connect?: InputMaybe<Array<ArrowNotesConnectFieldInput>>;
  create?: InputMaybe<Array<ArrowNotesCreateFieldInput>>;
  delete?: InputMaybe<Array<ArrowNotesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ArrowNotesDisconnectFieldInput>>;
  update?: InputMaybe<ArrowNotesUpdateConnectionInput>;
  where?: InputMaybe<ArrowNotesConnectionWhere>;
};

export type ArrowOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more ArrowSort objects to sort Arrows by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ArrowSort>>;
};

export type ArrowRelationInput = {
  archer?: InputMaybe<ArrowArcherCreateFieldInput>;
  comments?: InputMaybe<Array<ArrowCommentsCreateFieldInput>>;
  notes?: InputMaybe<Array<ArrowNotesCreateFieldInput>>;
  set?: InputMaybe<ArrowSetCreateFieldInput>;
};

export type ArrowSetAggregateInput = {
  AND?: InputMaybe<Array<ArrowSetAggregateInput>>;
  NOT?: InputMaybe<ArrowSetAggregateInput>;
  OR?: InputMaybe<Array<ArrowSetAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<ArrowSetNodeAggregationWhereInput>;
};

export type ArrowSetConnectFieldInput = {
  connect?: InputMaybe<SetConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SetConnectWhere>;
};

export type ArrowSetConnection = {
  __typename?: "ArrowSetConnection";
  edges: Array<ArrowSetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type ArrowSetConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type ArrowSetConnectionWhere = {
  AND?: InputMaybe<Array<ArrowSetConnectionWhere>>;
  NOT?: InputMaybe<ArrowSetConnectionWhere>;
  OR?: InputMaybe<Array<ArrowSetConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type ArrowSetCreateFieldInput = {
  node: SetCreateInput;
};

export type ArrowSetDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<ArrowSetConnectionWhere>;
};

export type ArrowSetDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<ArrowSetConnectionWhere>;
};

export type ArrowSetFieldInput = {
  connect?: InputMaybe<ArrowSetConnectFieldInput>;
  create?: InputMaybe<ArrowSetCreateFieldInput>;
};

export type ArrowSetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArrowSetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ArrowSetNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ArrowSetNodeAggregationWhereInput>>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowSetRelationship = {
  __typename?: "ArrowSetRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
};

export type ArrowSetSetAggregationSelection = {
  __typename?: "ArrowSetSetAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ArrowSetSetNodeAggregateSelection>;
};

export type ArrowSetSetNodeAggregateSelection = {
  __typename?: "ArrowSetSetNodeAggregateSelection";
  id: IdAggregateSelection;
  number: IntAggregateSelection;
};

export type ArrowSetUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type ArrowSetUpdateFieldInput = {
  connect?: InputMaybe<ArrowSetConnectFieldInput>;
  create?: InputMaybe<ArrowSetCreateFieldInput>;
  delete?: InputMaybe<ArrowSetDeleteFieldInput>;
  disconnect?: InputMaybe<ArrowSetDisconnectFieldInput>;
  update?: InputMaybe<ArrowSetUpdateConnectionInput>;
  where?: InputMaybe<ArrowSetConnectionWhere>;
};

/** Fields to sort Arrows by. The order in which sorts are applied is not guaranteed when specifying many fields in one ArrowSort object. */
export type ArrowSort = {
  angle?: InputMaybe<SortDirection>;
  coordinate?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  number?: InputMaybe<SortDirection>;
  offset?: InputMaybe<SortDirection>;
  value?: InputMaybe<SortDirection>;
};

export type ArrowUpdateInput = {
  angle?: InputMaybe<Scalars["Float"]["input"]>;
  angle_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  angle_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  archer?: InputMaybe<ArrowArcherUpdateInput>;
  comments?: InputMaybe<Array<ArrowCommentsUpdateFieldInput>>;
  coordinate?: InputMaybe<CartesianPointInput>;
  notes?: InputMaybe<Array<ArrowNotesUpdateFieldInput>>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  number_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Float"]["input"]>;
  offset_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  offset_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  set?: InputMaybe<ArrowSetUpdateFieldInput>;
  value?: InputMaybe<Scalars["Int"]["input"]>;
  value_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  value_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowWhere = {
  AND?: InputMaybe<Array<ArrowWhere>>;
  NOT?: InputMaybe<ArrowWhere>;
  OR?: InputMaybe<Array<ArrowWhere>>;
  angle?: InputMaybe<Scalars["Float"]["input"]>;
  angle_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  angle_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  archer?: InputMaybe<ArcherWhere>;
  archerConnection?: InputMaybe<ArrowArcherConnectionWhere>;
  archerConnection_NOT?: InputMaybe<ArrowArcherConnectionWhere>;
  archer_NOT?: InputMaybe<ArcherWhere>;
  commentsAggregate?: InputMaybe<ArrowCommentsAggregateInput>;
  /** Return Arrows where all of the related ArrowCommentsConnections match this filter */
  commentsConnection_ALL?: InputMaybe<ArrowCommentsConnectionWhere>;
  /** Return Arrows where none of the related ArrowCommentsConnections match this filter */
  commentsConnection_NONE?: InputMaybe<ArrowCommentsConnectionWhere>;
  /** Return Arrows where one of the related ArrowCommentsConnections match this filter */
  commentsConnection_SINGLE?: InputMaybe<ArrowCommentsConnectionWhere>;
  /** Return Arrows where some of the related ArrowCommentsConnections match this filter */
  commentsConnection_SOME?: InputMaybe<ArrowCommentsConnectionWhere>;
  /** Return Arrows where all of the related Comments match this filter */
  comments_ALL?: InputMaybe<CommentWhere>;
  /** Return Arrows where none of the related Comments match this filter */
  comments_NONE?: InputMaybe<CommentWhere>;
  /** Return Arrows where one of the related Comments match this filter */
  comments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Arrows where some of the related Comments match this filter */
  comments_SOME?: InputMaybe<CommentWhere>;
  coordinate?: InputMaybe<CartesianPointInput>;
  coordinate_DISTANCE?: InputMaybe<CartesianPointDistance>;
  coordinate_GT?: InputMaybe<CartesianPointDistance>;
  coordinate_GTE?: InputMaybe<CartesianPointDistance>;
  coordinate_IN?: InputMaybe<Array<InputMaybe<CartesianPointInput>>>;
  coordinate_LT?: InputMaybe<CartesianPointDistance>;
  coordinate_LTE?: InputMaybe<CartesianPointDistance>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  notesAggregate?: InputMaybe<ArrowNotesAggregateInput>;
  /** Return Arrows where all of the related ArrowNotesConnections match this filter */
  notesConnection_ALL?: InputMaybe<ArrowNotesConnectionWhere>;
  /** Return Arrows where none of the related ArrowNotesConnections match this filter */
  notesConnection_NONE?: InputMaybe<ArrowNotesConnectionWhere>;
  /** Return Arrows where one of the related ArrowNotesConnections match this filter */
  notesConnection_SINGLE?: InputMaybe<ArrowNotesConnectionWhere>;
  /** Return Arrows where some of the related ArrowNotesConnections match this filter */
  notesConnection_SOME?: InputMaybe<ArrowNotesConnectionWhere>;
  /** Return Arrows where all of the related Notes match this filter */
  notes_ALL?: InputMaybe<NoteWhere>;
  /** Return Arrows where none of the related Notes match this filter */
  notes_NONE?: InputMaybe<NoteWhere>;
  /** Return Arrows where one of the related Notes match this filter */
  notes_SINGLE?: InputMaybe<NoteWhere>;
  /** Return Arrows where some of the related Notes match this filter */
  notes_SOME?: InputMaybe<NoteWhere>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Float"]["input"]>;
  offset_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  offset_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  set?: InputMaybe<SetWhere>;
  setAggregate?: InputMaybe<ArrowSetAggregateInput>;
  setConnection?: InputMaybe<ArrowSetConnectionWhere>;
  setConnection_NOT?: InputMaybe<ArrowSetConnectionWhere>;
  set_NOT?: InputMaybe<SetWhere>;
  value?: InputMaybe<Scalars["Int"]["input"]>;
  value_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  value_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowsConnection = {
  __typename?: "ArrowsConnection";
  edges: Array<ArrowEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/**
 * The edge properties for the following fields:
 * * Target.arrows
 * * Target.sets
 * * Set.target
 */
export type AtTarget = {
  __typename?: "AtTarget";
  distance: Scalars["Int"]["output"];
};

export type AtTargetAggregationWhereInput = {
  AND?: InputMaybe<Array<AtTargetAggregationWhereInput>>;
  NOT?: InputMaybe<AtTargetAggregationWhereInput>;
  OR?: InputMaybe<Array<AtTargetAggregationWhereInput>>;
  distance_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  distance_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  distance_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  distance_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  distance_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AtTargetCreateInput = {
  distance: Scalars["Int"]["input"];
};

export type AtTargetSort = {
  distance?: InputMaybe<SortDirection>;
};

export type AtTargetUpdateInput = {
  distance?: InputMaybe<Scalars["Int"]["input"]>;
  distance_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AtTargetWhere = {
  AND?: InputMaybe<Array<AtTargetWhere>>;
  NOT?: InputMaybe<AtTargetWhere>;
  OR?: InputMaybe<Array<AtTargetWhere>>;
  distance?: InputMaybe<Scalars["Int"]["input"]>;
  distance_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  distance_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

/**
 * The edge properties for the following fields:
 * * User.authenticator
 * * Authenticator.users
 */
export type Authenticates = {
  __typename?: "Authenticates";
  id: Scalars["String"]["output"];
};

export type AuthenticatesAggregationWhereInput = {
  AND?: InputMaybe<Array<AuthenticatesAggregationWhereInput>>;
  NOT?: InputMaybe<AuthenticatesAggregationWhereInput>;
  OR?: InputMaybe<Array<AuthenticatesAggregationWhereInput>>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AuthenticatesCreateInput = {
  id: Scalars["String"]["input"];
};

export type AuthenticatesSort = {
  id?: InputMaybe<SortDirection>;
};

export type AuthenticatesUpdateInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type AuthenticatesWhere = {
  AND?: InputMaybe<Array<AuthenticatesWhere>>;
  NOT?: InputMaybe<AuthenticatesWhere>;
  OR?: InputMaybe<Array<AuthenticatesWhere>>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type Authenticator = {
  __typename?: "Authenticator";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  users: Array<User>;
  usersAggregate?: Maybe<AuthenticatorUserUsersAggregationSelection>;
  usersConnection: AuthenticatorUsersConnection;
};

export type AuthenticatorUsersArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type AuthenticatorUsersAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<UserWhere>;
};

export type AuthenticatorUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<AuthenticatorUsersConnectionSort>>;
  where?: InputMaybe<AuthenticatorUsersConnectionWhere>;
};

export type AuthenticatorAggregateSelection = {
  __typename?: "AuthenticatorAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type AuthenticatorConnectInput = {
  users?: InputMaybe<Array<AuthenticatorUsersConnectFieldInput>>;
};

export type AuthenticatorConnectOrCreateInput = {
  users?: InputMaybe<Array<AuthenticatorUsersConnectOrCreateFieldInput>>;
};

export type AuthenticatorConnectOrCreateWhere = {
  node: AuthenticatorUniqueWhere;
};

export type AuthenticatorConnectWhere = {
  node: AuthenticatorWhere;
};

export type AuthenticatorCreateInput = {
  name: Scalars["String"]["input"];
  users?: InputMaybe<AuthenticatorUsersFieldInput>;
};

export type AuthenticatorDeleteInput = {
  users?: InputMaybe<Array<AuthenticatorUsersDeleteFieldInput>>;
};

export type AuthenticatorDisconnectInput = {
  users?: InputMaybe<Array<AuthenticatorUsersDisconnectFieldInput>>;
};

export type AuthenticatorEdge = {
  __typename?: "AuthenticatorEdge";
  cursor: Scalars["String"]["output"];
  node: Authenticator;
};

export type AuthenticatorOnCreateInput = {
  name: Scalars["String"]["input"];
};

export type AuthenticatorOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more AuthenticatorSort objects to sort Authenticators by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AuthenticatorSort>>;
};

export type AuthenticatorRelationInput = {
  users?: InputMaybe<Array<AuthenticatorUsersCreateFieldInput>>;
};

/** Fields to sort Authenticators by. The order in which sorts are applied is not guaranteed when specifying many fields in one AuthenticatorSort object. */
export type AuthenticatorSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type AuthenticatorUniqueWhere = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type AuthenticatorUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<Array<AuthenticatorUsersUpdateFieldInput>>;
};

export type AuthenticatorUserUsersAggregationSelection = {
  __typename?: "AuthenticatorUserUsersAggregationSelection";
  count: Scalars["Int"]["output"];
  edge?: Maybe<AuthenticatorUserUsersEdgeAggregateSelection>;
  node?: Maybe<AuthenticatorUserUsersNodeAggregateSelection>;
};

export type AuthenticatorUserUsersEdgeAggregateSelection = {
  __typename?: "AuthenticatorUserUsersEdgeAggregateSelection";
  id: StringAggregateSelection;
};

export type AuthenticatorUserUsersNodeAggregateSelection = {
  __typename?: "AuthenticatorUserUsersNodeAggregateSelection";
  authId: StringAggregateSelection;
  id: IdAggregateSelection;
};

export type AuthenticatorUsersAggregateInput = {
  AND?: InputMaybe<Array<AuthenticatorUsersAggregateInput>>;
  NOT?: InputMaybe<AuthenticatorUsersAggregateInput>;
  OR?: InputMaybe<Array<AuthenticatorUsersAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  edge?: InputMaybe<AuthenticatesAggregationWhereInput>;
  node?: InputMaybe<AuthenticatorUsersNodeAggregationWhereInput>;
};

export type AuthenticatorUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  edge: AuthenticatesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<UserConnectWhere>;
};

export type AuthenticatorUsersConnectOrCreateFieldInput = {
  onCreate: AuthenticatorUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type AuthenticatorUsersConnectOrCreateFieldInputOnCreate = {
  edge: AuthenticatesCreateInput;
  node: UserOnCreateInput;
};

export type AuthenticatorUsersConnection = {
  __typename?: "AuthenticatorUsersConnection";
  edges: Array<AuthenticatorUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type AuthenticatorUsersConnectionSort = {
  edge?: InputMaybe<AuthenticatesSort>;
  node?: InputMaybe<UserSort>;
};

export type AuthenticatorUsersConnectionWhere = {
  AND?: InputMaybe<Array<AuthenticatorUsersConnectionWhere>>;
  NOT?: InputMaybe<AuthenticatorUsersConnectionWhere>;
  OR?: InputMaybe<Array<AuthenticatorUsersConnectionWhere>>;
  edge?: InputMaybe<AuthenticatesWhere>;
  node?: InputMaybe<UserWhere>;
};

export type AuthenticatorUsersCreateFieldInput = {
  edge: AuthenticatesCreateInput;
  node: UserCreateInput;
};

export type AuthenticatorUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<AuthenticatorUsersConnectionWhere>;
};

export type AuthenticatorUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<AuthenticatorUsersConnectionWhere>;
};

export type AuthenticatorUsersFieldInput = {
  connect?: InputMaybe<Array<AuthenticatorUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<AuthenticatorUsersConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<AuthenticatorUsersCreateFieldInput>>;
};

export type AuthenticatorUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AuthenticatorUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AuthenticatorUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<AuthenticatorUsersNodeAggregationWhereInput>>;
  authId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  authId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AuthenticatorUsersRelationship = {
  __typename?: "AuthenticatorUsersRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
  properties: Authenticates;
};

export type AuthenticatorUsersUpdateConnectionInput = {
  edge?: InputMaybe<AuthenticatesUpdateInput>;
  node?: InputMaybe<UserUpdateInput>;
};

export type AuthenticatorUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<AuthenticatorUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<AuthenticatorUsersConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<AuthenticatorUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<AuthenticatorUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AuthenticatorUsersDisconnectFieldInput>>;
  update?: InputMaybe<AuthenticatorUsersUpdateConnectionInput>;
  where?: InputMaybe<AuthenticatorUsersConnectionWhere>;
};

export type AuthenticatorWhere = {
  AND?: InputMaybe<Array<AuthenticatorWhere>>;
  NOT?: InputMaybe<AuthenticatorWhere>;
  OR?: InputMaybe<Array<AuthenticatorWhere>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  usersAggregate?: InputMaybe<AuthenticatorUsersAggregateInput>;
  /** Return Authenticators where all of the related AuthenticatorUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<AuthenticatorUsersConnectionWhere>;
  /** Return Authenticators where none of the related AuthenticatorUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<AuthenticatorUsersConnectionWhere>;
  /** Return Authenticators where one of the related AuthenticatorUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<AuthenticatorUsersConnectionWhere>;
  /** Return Authenticators where some of the related AuthenticatorUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<AuthenticatorUsersConnectionWhere>;
  /** Return Authenticators where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Authenticators where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Authenticators where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Authenticators where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
};

export type AuthenticatorsConnection = {
  __typename?: "AuthenticatorsConnection";
  edges: Array<AuthenticatorEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type Bow = {
  __typename?: "Bow";
  brand: Scalars["String"]["output"];
  comments: Array<Comment>;
  commentsAggregate?: Maybe<BowCommentCommentsAggregationSelection>;
  commentsConnection: BowCommentsConnection;
  id: Scalars["ID"]["output"];
  model: Scalars["String"]["output"];
  notes: Array<Note>;
  notesAggregate?: Maybe<BowNoteNotesAggregationSelection>;
  notesConnection: BowNotesConnection;
  owner: User;
  ownerAggregate?: Maybe<BowUserOwnerAggregationSelection>;
  ownerConnection: BowOwnerConnection;
  type: BowType;
};

export type BowCommentsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type BowCommentsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CommentWhere>;
};

export type BowCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<BowCommentsConnectionSort>>;
  where?: InputMaybe<BowCommentsConnectionWhere>;
};

export type BowNotesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<NoteOptions>;
  where?: InputMaybe<NoteWhere>;
};

export type BowNotesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<NoteWhere>;
};

export type BowNotesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<BowNotesConnectionSort>>;
  where?: InputMaybe<BowNotesConnectionWhere>;
};

export type BowOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<UserWhere>;
};

export type BowOwnerConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<BowOwnerConnectionSort>>;
  where?: InputMaybe<BowOwnerConnectionWhere>;
};

export type BowAggregateSelection = {
  __typename?: "BowAggregateSelection";
  brand: StringAggregateSelection;
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  model: StringAggregateSelection;
};

export type BowCommentCommentsAggregationSelection = {
  __typename?: "BowCommentCommentsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<BowCommentCommentsNodeAggregateSelection>;
};

export type BowCommentCommentsNodeAggregateSelection = {
  __typename?: "BowCommentCommentsNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type BowCommentsAggregateInput = {
  AND?: InputMaybe<Array<BowCommentsAggregateInput>>;
  NOT?: InputMaybe<BowCommentsAggregateInput>;
  OR?: InputMaybe<Array<BowCommentsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<BowCommentsNodeAggregationWhereInput>;
};

export type BowCommentsConnectFieldInput = {
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<CommentConnectWhere>;
};

export type BowCommentsConnection = {
  __typename?: "BowCommentsConnection";
  edges: Array<BowCommentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type BowCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type BowCommentsConnectionWhere = {
  AND?: InputMaybe<Array<BowCommentsConnectionWhere>>;
  NOT?: InputMaybe<BowCommentsConnectionWhere>;
  OR?: InputMaybe<Array<BowCommentsConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type BowCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type BowCommentsDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<BowCommentsConnectionWhere>;
};

export type BowCommentsDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<BowCommentsConnectionWhere>;
};

export type BowCommentsFieldInput = {
  connect?: InputMaybe<Array<BowCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<BowCommentsCreateFieldInput>>;
};

export type BowCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BowCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BowCommentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BowCommentsNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BowCommentsRelationship = {
  __typename?: "BowCommentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type BowCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type BowCommentsUpdateFieldInput = {
  connect?: InputMaybe<Array<BowCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<BowCommentsCreateFieldInput>>;
  delete?: InputMaybe<Array<BowCommentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<BowCommentsDisconnectFieldInput>>;
  update?: InputMaybe<BowCommentsUpdateConnectionInput>;
  where?: InputMaybe<BowCommentsConnectionWhere>;
};

export type BowConnectInput = {
  comments?: InputMaybe<Array<BowCommentsConnectFieldInput>>;
  notes?: InputMaybe<Array<BowNotesConnectFieldInput>>;
  owner?: InputMaybe<BowOwnerConnectFieldInput>;
};

export type BowConnectOrCreateInput = {
  owner?: InputMaybe<BowOwnerConnectOrCreateFieldInput>;
};

export type BowConnectWhere = {
  node: BowWhere;
};

export type BowCreateInput = {
  brand: Scalars["String"]["input"];
  comments?: InputMaybe<BowCommentsFieldInput>;
  model: Scalars["String"]["input"];
  notes?: InputMaybe<BowNotesFieldInput>;
  owner?: InputMaybe<BowOwnerFieldInput>;
  type: BowType;
};

export type BowDeleteInput = {
  comments?: InputMaybe<Array<BowCommentsDeleteFieldInput>>;
  notes?: InputMaybe<Array<BowNotesDeleteFieldInput>>;
  owner?: InputMaybe<BowOwnerDeleteFieldInput>;
};

export type BowDisconnectInput = {
  comments?: InputMaybe<Array<BowCommentsDisconnectFieldInput>>;
  notes?: InputMaybe<Array<BowNotesDisconnectFieldInput>>;
  owner?: InputMaybe<BowOwnerDisconnectFieldInput>;
};

export type BowEdge = {
  __typename?: "BowEdge";
  cursor: Scalars["String"]["output"];
  node: Bow;
};

export type BowNoteNotesAggregationSelection = {
  __typename?: "BowNoteNotesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<BowNoteNotesNodeAggregateSelection>;
};

export type BowNoteNotesNodeAggregateSelection = {
  __typename?: "BowNoteNotesNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type BowNotesAggregateInput = {
  AND?: InputMaybe<Array<BowNotesAggregateInput>>;
  NOT?: InputMaybe<BowNotesAggregateInput>;
  OR?: InputMaybe<Array<BowNotesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<BowNotesNodeAggregationWhereInput>;
};

export type BowNotesConnectFieldInput = {
  connect?: InputMaybe<Array<NoteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<NoteConnectWhere>;
};

export type BowNotesConnection = {
  __typename?: "BowNotesConnection";
  edges: Array<BowNotesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type BowNotesConnectionSort = {
  node?: InputMaybe<NoteSort>;
};

export type BowNotesConnectionWhere = {
  AND?: InputMaybe<Array<BowNotesConnectionWhere>>;
  NOT?: InputMaybe<BowNotesConnectionWhere>;
  OR?: InputMaybe<Array<BowNotesConnectionWhere>>;
  node?: InputMaybe<NoteWhere>;
};

export type BowNotesCreateFieldInput = {
  node: NoteCreateInput;
};

export type BowNotesDeleteFieldInput = {
  delete?: InputMaybe<NoteDeleteInput>;
  where?: InputMaybe<BowNotesConnectionWhere>;
};

export type BowNotesDisconnectFieldInput = {
  disconnect?: InputMaybe<NoteDisconnectInput>;
  where?: InputMaybe<BowNotesConnectionWhere>;
};

export type BowNotesFieldInput = {
  connect?: InputMaybe<Array<BowNotesConnectFieldInput>>;
  create?: InputMaybe<Array<BowNotesCreateFieldInput>>;
};

export type BowNotesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BowNotesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BowNotesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BowNotesNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BowNotesRelationship = {
  __typename?: "BowNotesRelationship";
  cursor: Scalars["String"]["output"];
  node: Note;
};

export type BowNotesUpdateConnectionInput = {
  node?: InputMaybe<NoteUpdateInput>;
};

export type BowNotesUpdateFieldInput = {
  connect?: InputMaybe<Array<BowNotesConnectFieldInput>>;
  create?: InputMaybe<Array<BowNotesCreateFieldInput>>;
  delete?: InputMaybe<Array<BowNotesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<BowNotesDisconnectFieldInput>>;
  update?: InputMaybe<BowNotesUpdateConnectionInput>;
  where?: InputMaybe<BowNotesConnectionWhere>;
};

export type BowOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more BowSort objects to sort Bows by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BowSort>>;
};

export type BowOwnerAggregateInput = {
  AND?: InputMaybe<Array<BowOwnerAggregateInput>>;
  NOT?: InputMaybe<BowOwnerAggregateInput>;
  OR?: InputMaybe<Array<BowOwnerAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<BowOwnerNodeAggregationWhereInput>;
};

export type BowOwnerConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<UserConnectWhere>;
};

export type BowOwnerConnectOrCreateFieldInput = {
  onCreate: BowOwnerConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type BowOwnerConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type BowOwnerConnection = {
  __typename?: "BowOwnerConnection";
  edges: Array<BowOwnerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type BowOwnerConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type BowOwnerConnectionWhere = {
  AND?: InputMaybe<Array<BowOwnerConnectionWhere>>;
  NOT?: InputMaybe<BowOwnerConnectionWhere>;
  OR?: InputMaybe<Array<BowOwnerConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type BowOwnerCreateFieldInput = {
  node: UserCreateInput;
};

export type BowOwnerDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<BowOwnerConnectionWhere>;
};

export type BowOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<BowOwnerConnectionWhere>;
};

export type BowOwnerFieldInput = {
  connect?: InputMaybe<BowOwnerConnectFieldInput>;
  connectOrCreate?: InputMaybe<BowOwnerConnectOrCreateFieldInput>;
  create?: InputMaybe<BowOwnerCreateFieldInput>;
};

export type BowOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BowOwnerNodeAggregationWhereInput>>;
  NOT?: InputMaybe<BowOwnerNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<BowOwnerNodeAggregationWhereInput>>;
  authId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  authId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type BowOwnerRelationship = {
  __typename?: "BowOwnerRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type BowOwnerUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type BowOwnerUpdateFieldInput = {
  connect?: InputMaybe<BowOwnerConnectFieldInput>;
  connectOrCreate?: InputMaybe<BowOwnerConnectOrCreateFieldInput>;
  create?: InputMaybe<BowOwnerCreateFieldInput>;
  delete?: InputMaybe<BowOwnerDeleteFieldInput>;
  disconnect?: InputMaybe<BowOwnerDisconnectFieldInput>;
  update?: InputMaybe<BowOwnerUpdateConnectionInput>;
  where?: InputMaybe<BowOwnerConnectionWhere>;
};

export type BowRelationInput = {
  comments?: InputMaybe<Array<BowCommentsCreateFieldInput>>;
  notes?: InputMaybe<Array<BowNotesCreateFieldInput>>;
  owner?: InputMaybe<BowOwnerCreateFieldInput>;
};

/** Fields to sort Bows by. The order in which sorts are applied is not guaranteed when specifying many fields in one BowSort object. */
export type BowSort = {
  brand?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  model?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export enum BowType {
  Barebow = "BAREBOW",
  Compound = "COMPOUND",
  Recurve = "RECURVE",
}

export type BowUpdateInput = {
  brand?: InputMaybe<Scalars["String"]["input"]>;
  comments?: InputMaybe<Array<BowCommentsUpdateFieldInput>>;
  model?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Array<BowNotesUpdateFieldInput>>;
  owner?: InputMaybe<BowOwnerUpdateFieldInput>;
  type?: InputMaybe<BowType>;
};

export type BowUserOwnerAggregationSelection = {
  __typename?: "BowUserOwnerAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<BowUserOwnerNodeAggregateSelection>;
};

export type BowUserOwnerNodeAggregateSelection = {
  __typename?: "BowUserOwnerNodeAggregateSelection";
  authId: StringAggregateSelection;
  id: IdAggregateSelection;
};

export type BowWhere = {
  AND?: InputMaybe<Array<BowWhere>>;
  NOT?: InputMaybe<BowWhere>;
  OR?: InputMaybe<Array<BowWhere>>;
  brand?: InputMaybe<Scalars["String"]["input"]>;
  brand_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  brand_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  brand_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  brand_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  commentsAggregate?: InputMaybe<BowCommentsAggregateInput>;
  /** Return Bows where all of the related BowCommentsConnections match this filter */
  commentsConnection_ALL?: InputMaybe<BowCommentsConnectionWhere>;
  /** Return Bows where none of the related BowCommentsConnections match this filter */
  commentsConnection_NONE?: InputMaybe<BowCommentsConnectionWhere>;
  /** Return Bows where one of the related BowCommentsConnections match this filter */
  commentsConnection_SINGLE?: InputMaybe<BowCommentsConnectionWhere>;
  /** Return Bows where some of the related BowCommentsConnections match this filter */
  commentsConnection_SOME?: InputMaybe<BowCommentsConnectionWhere>;
  /** Return Bows where all of the related Comments match this filter */
  comments_ALL?: InputMaybe<CommentWhere>;
  /** Return Bows where none of the related Comments match this filter */
  comments_NONE?: InputMaybe<CommentWhere>;
  /** Return Bows where one of the related Comments match this filter */
  comments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Bows where some of the related Comments match this filter */
  comments_SOME?: InputMaybe<CommentWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  model?: InputMaybe<Scalars["String"]["input"]>;
  model_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  model_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  model_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  model_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  notesAggregate?: InputMaybe<BowNotesAggregateInput>;
  /** Return Bows where all of the related BowNotesConnections match this filter */
  notesConnection_ALL?: InputMaybe<BowNotesConnectionWhere>;
  /** Return Bows where none of the related BowNotesConnections match this filter */
  notesConnection_NONE?: InputMaybe<BowNotesConnectionWhere>;
  /** Return Bows where one of the related BowNotesConnections match this filter */
  notesConnection_SINGLE?: InputMaybe<BowNotesConnectionWhere>;
  /** Return Bows where some of the related BowNotesConnections match this filter */
  notesConnection_SOME?: InputMaybe<BowNotesConnectionWhere>;
  /** Return Bows where all of the related Notes match this filter */
  notes_ALL?: InputMaybe<NoteWhere>;
  /** Return Bows where none of the related Notes match this filter */
  notes_NONE?: InputMaybe<NoteWhere>;
  /** Return Bows where one of the related Notes match this filter */
  notes_SINGLE?: InputMaybe<NoteWhere>;
  /** Return Bows where some of the related Notes match this filter */
  notes_SOME?: InputMaybe<NoteWhere>;
  owner?: InputMaybe<UserWhere>;
  ownerAggregate?: InputMaybe<BowOwnerAggregateInput>;
  ownerConnection?: InputMaybe<BowOwnerConnectionWhere>;
  ownerConnection_NOT?: InputMaybe<BowOwnerConnectionWhere>;
  owner_NOT?: InputMaybe<UserWhere>;
  type?: InputMaybe<BowType>;
  type_IN?: InputMaybe<Array<BowType>>;
};

export type BowsConnection = {
  __typename?: "BowsConnection";
  edges: Array<BowEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** A point in a two- or three-dimensional Cartesian coordinate system or in a three-dimensional cylindrical coordinate system. For more information, see https://neo4j.com/docs/graphql/4/type-definitions/types/spatial/#cartesian-point */
export type CartesianPoint = {
  __typename?: "CartesianPoint";
  crs: Scalars["String"]["output"];
  srid: Scalars["Int"]["output"];
  x: Scalars["Float"]["output"];
  y: Scalars["Float"]["output"];
  z?: Maybe<Scalars["Float"]["output"]>;
};

/** Input type for a cartesian point with a distance */
export type CartesianPointDistance = {
  distance: Scalars["Float"]["input"];
  point: CartesianPointInput;
};

/** Input type for a cartesian point */
export type CartesianPointInput = {
  x: Scalars["Float"]["input"];
  y: Scalars["Float"]["input"];
  z?: InputMaybe<Scalars["Float"]["input"]>;
};

export type Comment = {
  __typename?: "Comment";
  arrow?: Maybe<Arrow>;
  arrowAggregate?: Maybe<CommentArrowArrowAggregationSelection>;
  arrowConnection: CommentArrowConnection;
  bow?: Maybe<Bow>;
  bowAggregate?: Maybe<CommentBowBowAggregationSelection>;
  bowConnection: CommentBowConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  date: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  note?: Maybe<Note>;
  noteAggregate?: Maybe<CommentNoteNoteAggregationSelection>;
  noteConnection: CommentNoteConnection;
  session?: Maybe<Session>;
  sessionAggregate?: Maybe<CommentSessionSessionAggregationSelection>;
  sessionConnection: CommentSessionConnection;
  set?: Maybe<Set>;
  setAggregate?: Maybe<CommentSetSetAggregationSelection>;
  setConnection: CommentSetConnection;
  title: Scalars["String"]["output"];
};

export type CommentArrowAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ArrowWhere>;
};

export type CommentArrowConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<CommentArrowConnectionSort>>;
  where?: InputMaybe<CommentArrowConnectionWhere>;
};

export type CommentBowAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BowWhere>;
};

export type CommentBowConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<CommentBowConnectionSort>>;
  where?: InputMaybe<CommentBowConnectionWhere>;
};

export type CommentNoteAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<NoteWhere>;
};

export type CommentNoteConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<CommentNoteConnectionSort>>;
  where?: InputMaybe<CommentNoteConnectionWhere>;
};

export type CommentSessionAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SessionWhere>;
};

export type CommentSessionConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<CommentSessionConnectionSort>>;
  where?: InputMaybe<CommentSessionConnectionWhere>;
};

export type CommentSetAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SetWhere>;
};

export type CommentSetConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<CommentSetConnectionSort>>;
  where?: InputMaybe<CommentSetConnectionWhere>;
};

export type CommentAggregateSelection = {
  __typename?: "CommentAggregateSelection";
  content: StringAggregateSelection;
  count: Scalars["Int"]["output"];
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type CommentArrowAggregateInput = {
  AND?: InputMaybe<Array<CommentArrowAggregateInput>>;
  NOT?: InputMaybe<CommentArrowAggregateInput>;
  OR?: InputMaybe<Array<CommentArrowAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<CommentArrowNodeAggregationWhereInput>;
};

export type CommentArrowArrowAggregationSelection = {
  __typename?: "CommentArrowArrowAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CommentArrowArrowNodeAggregateSelection>;
};

export type CommentArrowArrowNodeAggregateSelection = {
  __typename?: "CommentArrowArrowNodeAggregateSelection";
  angle: FloatAggregateSelection;
  id: IdAggregateSelection;
  number: IntAggregateSelection;
  offset: FloatAggregateSelection;
  value: IntAggregateSelection;
};

export type CommentArrowConnectFieldInput = {
  connect?: InputMaybe<ArrowConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<ArrowConnectWhere>;
};

export type CommentArrowConnection = {
  __typename?: "CommentArrowConnection";
  edges: Array<CommentArrowRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CommentArrowConnectionSort = {
  node?: InputMaybe<ArrowSort>;
};

export type CommentArrowConnectionWhere = {
  AND?: InputMaybe<Array<CommentArrowConnectionWhere>>;
  NOT?: InputMaybe<CommentArrowConnectionWhere>;
  OR?: InputMaybe<Array<CommentArrowConnectionWhere>>;
  node?: InputMaybe<ArrowWhere>;
};

export type CommentArrowCreateFieldInput = {
  node: ArrowCreateInput;
};

export type CommentArrowDeleteFieldInput = {
  delete?: InputMaybe<ArrowDeleteInput>;
  where?: InputMaybe<CommentArrowConnectionWhere>;
};

export type CommentArrowDisconnectFieldInput = {
  disconnect?: InputMaybe<ArrowDisconnectInput>;
  where?: InputMaybe<CommentArrowConnectionWhere>;
};

export type CommentArrowFieldInput = {
  connect?: InputMaybe<CommentArrowConnectFieldInput>;
  create?: InputMaybe<CommentArrowCreateFieldInput>;
};

export type CommentArrowNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentArrowNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentArrowNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentArrowNodeAggregationWhereInput>>;
  angle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  offset_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentArrowRelationship = {
  __typename?: "CommentArrowRelationship";
  cursor: Scalars["String"]["output"];
  node: Arrow;
};

export type CommentArrowUpdateConnectionInput = {
  node?: InputMaybe<ArrowUpdateInput>;
};

export type CommentArrowUpdateFieldInput = {
  connect?: InputMaybe<CommentArrowConnectFieldInput>;
  create?: InputMaybe<CommentArrowCreateFieldInput>;
  delete?: InputMaybe<CommentArrowDeleteFieldInput>;
  disconnect?: InputMaybe<CommentArrowDisconnectFieldInput>;
  update?: InputMaybe<CommentArrowUpdateConnectionInput>;
  where?: InputMaybe<CommentArrowConnectionWhere>;
};

export type CommentBowAggregateInput = {
  AND?: InputMaybe<Array<CommentBowAggregateInput>>;
  NOT?: InputMaybe<CommentBowAggregateInput>;
  OR?: InputMaybe<Array<CommentBowAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<CommentBowNodeAggregationWhereInput>;
};

export type CommentBowBowAggregationSelection = {
  __typename?: "CommentBowBowAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CommentBowBowNodeAggregateSelection>;
};

export type CommentBowBowNodeAggregateSelection = {
  __typename?: "CommentBowBowNodeAggregateSelection";
  brand: StringAggregateSelection;
  id: IdAggregateSelection;
  model: StringAggregateSelection;
};

export type CommentBowConnectFieldInput = {
  connect?: InputMaybe<BowConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<BowConnectWhere>;
};

export type CommentBowConnection = {
  __typename?: "CommentBowConnection";
  edges: Array<CommentBowRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CommentBowConnectionSort = {
  node?: InputMaybe<BowSort>;
};

export type CommentBowConnectionWhere = {
  AND?: InputMaybe<Array<CommentBowConnectionWhere>>;
  NOT?: InputMaybe<CommentBowConnectionWhere>;
  OR?: InputMaybe<Array<CommentBowConnectionWhere>>;
  node?: InputMaybe<BowWhere>;
};

export type CommentBowCreateFieldInput = {
  node: BowCreateInput;
};

export type CommentBowDeleteFieldInput = {
  delete?: InputMaybe<BowDeleteInput>;
  where?: InputMaybe<CommentBowConnectionWhere>;
};

export type CommentBowDisconnectFieldInput = {
  disconnect?: InputMaybe<BowDisconnectInput>;
  where?: InputMaybe<CommentBowConnectionWhere>;
};

export type CommentBowFieldInput = {
  connect?: InputMaybe<CommentBowConnectFieldInput>;
  create?: InputMaybe<CommentBowCreateFieldInput>;
};

export type CommentBowNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentBowNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentBowNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentBowNodeAggregationWhereInput>>;
  brand_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  brand_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  model_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentBowRelationship = {
  __typename?: "CommentBowRelationship";
  cursor: Scalars["String"]["output"];
  node: Bow;
};

export type CommentBowUpdateConnectionInput = {
  node?: InputMaybe<BowUpdateInput>;
};

export type CommentBowUpdateFieldInput = {
  connect?: InputMaybe<CommentBowConnectFieldInput>;
  create?: InputMaybe<CommentBowCreateFieldInput>;
  delete?: InputMaybe<CommentBowDeleteFieldInput>;
  disconnect?: InputMaybe<CommentBowDisconnectFieldInput>;
  update?: InputMaybe<CommentBowUpdateConnectionInput>;
  where?: InputMaybe<CommentBowConnectionWhere>;
};

export type CommentConnectInput = {
  arrow?: InputMaybe<CommentArrowConnectFieldInput>;
  bow?: InputMaybe<CommentBowConnectFieldInput>;
  note?: InputMaybe<CommentNoteConnectFieldInput>;
  session?: InputMaybe<CommentSessionConnectFieldInput>;
  set?: InputMaybe<CommentSetConnectFieldInput>;
};

export type CommentConnectWhere = {
  node: CommentWhere;
};

export type CommentCreateInput = {
  arrow?: InputMaybe<CommentArrowFieldInput>;
  bow?: InputMaybe<CommentBowFieldInput>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  date: Scalars["Int"]["input"];
  note?: InputMaybe<CommentNoteFieldInput>;
  session?: InputMaybe<CommentSessionFieldInput>;
  set?: InputMaybe<CommentSetFieldInput>;
  title: Scalars["String"]["input"];
};

export type CommentDeleteInput = {
  arrow?: InputMaybe<CommentArrowDeleteFieldInput>;
  bow?: InputMaybe<CommentBowDeleteFieldInput>;
  note?: InputMaybe<CommentNoteDeleteFieldInput>;
  session?: InputMaybe<CommentSessionDeleteFieldInput>;
  set?: InputMaybe<CommentSetDeleteFieldInput>;
};

export type CommentDisconnectInput = {
  arrow?: InputMaybe<CommentArrowDisconnectFieldInput>;
  bow?: InputMaybe<CommentBowDisconnectFieldInput>;
  note?: InputMaybe<CommentNoteDisconnectFieldInput>;
  session?: InputMaybe<CommentSessionDisconnectFieldInput>;
  set?: InputMaybe<CommentSetDisconnectFieldInput>;
};

export type CommentEdge = {
  __typename?: "CommentEdge";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type CommentNoteAggregateInput = {
  AND?: InputMaybe<Array<CommentNoteAggregateInput>>;
  NOT?: InputMaybe<CommentNoteAggregateInput>;
  OR?: InputMaybe<Array<CommentNoteAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<CommentNoteNodeAggregationWhereInput>;
};

export type CommentNoteConnectFieldInput = {
  connect?: InputMaybe<NoteConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<NoteConnectWhere>;
};

export type CommentNoteConnection = {
  __typename?: "CommentNoteConnection";
  edges: Array<CommentNoteRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CommentNoteConnectionSort = {
  node?: InputMaybe<NoteSort>;
};

export type CommentNoteConnectionWhere = {
  AND?: InputMaybe<Array<CommentNoteConnectionWhere>>;
  NOT?: InputMaybe<CommentNoteConnectionWhere>;
  OR?: InputMaybe<Array<CommentNoteConnectionWhere>>;
  node?: InputMaybe<NoteWhere>;
};

export type CommentNoteCreateFieldInput = {
  node: NoteCreateInput;
};

export type CommentNoteDeleteFieldInput = {
  delete?: InputMaybe<NoteDeleteInput>;
  where?: InputMaybe<CommentNoteConnectionWhere>;
};

export type CommentNoteDisconnectFieldInput = {
  disconnect?: InputMaybe<NoteDisconnectInput>;
  where?: InputMaybe<CommentNoteConnectionWhere>;
};

export type CommentNoteFieldInput = {
  connect?: InputMaybe<CommentNoteConnectFieldInput>;
  create?: InputMaybe<CommentNoteCreateFieldInput>;
};

export type CommentNoteNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentNoteNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentNoteNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentNoteNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentNoteNoteAggregationSelection = {
  __typename?: "CommentNoteNoteAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CommentNoteNoteNodeAggregateSelection>;
};

export type CommentNoteNoteNodeAggregateSelection = {
  __typename?: "CommentNoteNoteNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type CommentNoteRelationship = {
  __typename?: "CommentNoteRelationship";
  cursor: Scalars["String"]["output"];
  node: Note;
};

export type CommentNoteUpdateConnectionInput = {
  node?: InputMaybe<NoteUpdateInput>;
};

export type CommentNoteUpdateFieldInput = {
  connect?: InputMaybe<CommentNoteConnectFieldInput>;
  create?: InputMaybe<CommentNoteCreateFieldInput>;
  delete?: InputMaybe<CommentNoteDeleteFieldInput>;
  disconnect?: InputMaybe<CommentNoteDisconnectFieldInput>;
  update?: InputMaybe<CommentNoteUpdateConnectionInput>;
  where?: InputMaybe<CommentNoteConnectionWhere>;
};

export type CommentOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more CommentSort objects to sort Comments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CommentSort>>;
};

export type CommentRelationInput = {
  arrow?: InputMaybe<CommentArrowCreateFieldInput>;
  bow?: InputMaybe<CommentBowCreateFieldInput>;
  note?: InputMaybe<CommentNoteCreateFieldInput>;
  session?: InputMaybe<CommentSessionCreateFieldInput>;
  set?: InputMaybe<CommentSetCreateFieldInput>;
};

export type CommentSessionAggregateInput = {
  AND?: InputMaybe<Array<CommentSessionAggregateInput>>;
  NOT?: InputMaybe<CommentSessionAggregateInput>;
  OR?: InputMaybe<Array<CommentSessionAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<CommentSessionNodeAggregationWhereInput>;
};

export type CommentSessionConnectFieldInput = {
  connect?: InputMaybe<SessionConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SessionConnectWhere>;
};

export type CommentSessionConnection = {
  __typename?: "CommentSessionConnection";
  edges: Array<CommentSessionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CommentSessionConnectionSort = {
  node?: InputMaybe<SessionSort>;
};

export type CommentSessionConnectionWhere = {
  AND?: InputMaybe<Array<CommentSessionConnectionWhere>>;
  NOT?: InputMaybe<CommentSessionConnectionWhere>;
  OR?: InputMaybe<Array<CommentSessionConnectionWhere>>;
  node?: InputMaybe<SessionWhere>;
};

export type CommentSessionCreateFieldInput = {
  node: SessionCreateInput;
};

export type CommentSessionDeleteFieldInput = {
  delete?: InputMaybe<SessionDeleteInput>;
  where?: InputMaybe<CommentSessionConnectionWhere>;
};

export type CommentSessionDisconnectFieldInput = {
  disconnect?: InputMaybe<SessionDisconnectInput>;
  where?: InputMaybe<CommentSessionConnectionWhere>;
};

export type CommentSessionFieldInput = {
  connect?: InputMaybe<CommentSessionConnectFieldInput>;
  create?: InputMaybe<CommentSessionCreateFieldInput>;
};

export type CommentSessionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentSessionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentSessionNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentSessionNodeAggregationWhereInput>>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentSessionRelationship = {
  __typename?: "CommentSessionRelationship";
  cursor: Scalars["String"]["output"];
  node: Session;
};

export type CommentSessionSessionAggregationSelection = {
  __typename?: "CommentSessionSessionAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CommentSessionSessionNodeAggregateSelection>;
};

export type CommentSessionSessionNodeAggregateSelection = {
  __typename?: "CommentSessionSessionNodeAggregateSelection";
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CommentSessionUpdateConnectionInput = {
  node?: InputMaybe<SessionUpdateInput>;
};

export type CommentSessionUpdateFieldInput = {
  connect?: InputMaybe<CommentSessionConnectFieldInput>;
  create?: InputMaybe<CommentSessionCreateFieldInput>;
  delete?: InputMaybe<CommentSessionDeleteFieldInput>;
  disconnect?: InputMaybe<CommentSessionDisconnectFieldInput>;
  update?: InputMaybe<CommentSessionUpdateConnectionInput>;
  where?: InputMaybe<CommentSessionConnectionWhere>;
};

export type CommentSetAggregateInput = {
  AND?: InputMaybe<Array<CommentSetAggregateInput>>;
  NOT?: InputMaybe<CommentSetAggregateInput>;
  OR?: InputMaybe<Array<CommentSetAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<CommentSetNodeAggregationWhereInput>;
};

export type CommentSetConnectFieldInput = {
  connect?: InputMaybe<SetConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SetConnectWhere>;
};

export type CommentSetConnection = {
  __typename?: "CommentSetConnection";
  edges: Array<CommentSetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CommentSetConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type CommentSetConnectionWhere = {
  AND?: InputMaybe<Array<CommentSetConnectionWhere>>;
  NOT?: InputMaybe<CommentSetConnectionWhere>;
  OR?: InputMaybe<Array<CommentSetConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type CommentSetCreateFieldInput = {
  node: SetCreateInput;
};

export type CommentSetDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<CommentSetConnectionWhere>;
};

export type CommentSetDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<CommentSetConnectionWhere>;
};

export type CommentSetFieldInput = {
  connect?: InputMaybe<CommentSetConnectFieldInput>;
  create?: InputMaybe<CommentSetCreateFieldInput>;
};

export type CommentSetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CommentSetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CommentSetNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CommentSetNodeAggregationWhereInput>>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CommentSetRelationship = {
  __typename?: "CommentSetRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
};

export type CommentSetSetAggregationSelection = {
  __typename?: "CommentSetSetAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CommentSetSetNodeAggregateSelection>;
};

export type CommentSetSetNodeAggregateSelection = {
  __typename?: "CommentSetSetNodeAggregateSelection";
  id: IdAggregateSelection;
  number: IntAggregateSelection;
};

export type CommentSetUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type CommentSetUpdateFieldInput = {
  connect?: InputMaybe<CommentSetConnectFieldInput>;
  create?: InputMaybe<CommentSetCreateFieldInput>;
  delete?: InputMaybe<CommentSetDeleteFieldInput>;
  disconnect?: InputMaybe<CommentSetDisconnectFieldInput>;
  update?: InputMaybe<CommentSetUpdateConnectionInput>;
  where?: InputMaybe<CommentSetConnectionWhere>;
};

/** Fields to sort Comments by. The order in which sorts are applied is not guaranteed when specifying many fields in one CommentSort object. */
export type CommentSort = {
  content?: InputMaybe<SortDirection>;
  date?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type CommentUpdateInput = {
  arrow?: InputMaybe<CommentArrowUpdateFieldInput>;
  bow?: InputMaybe<CommentBowUpdateFieldInput>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["Int"]["input"]>;
  date_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  date_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  note?: InputMaybe<CommentNoteUpdateFieldInput>;
  session?: InputMaybe<CommentSessionUpdateFieldInput>;
  set?: InputMaybe<CommentSetUpdateFieldInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type CommentWhere = {
  AND?: InputMaybe<Array<CommentWhere>>;
  NOT?: InputMaybe<CommentWhere>;
  OR?: InputMaybe<Array<CommentWhere>>;
  arrow?: InputMaybe<ArrowWhere>;
  arrowAggregate?: InputMaybe<CommentArrowAggregateInput>;
  arrowConnection?: InputMaybe<CommentArrowConnectionWhere>;
  arrowConnection_NOT?: InputMaybe<CommentArrowConnectionWhere>;
  arrow_NOT?: InputMaybe<ArrowWhere>;
  bow?: InputMaybe<BowWhere>;
  bowAggregate?: InputMaybe<CommentBowAggregateInput>;
  bowConnection?: InputMaybe<CommentBowConnectionWhere>;
  bowConnection_NOT?: InputMaybe<CommentBowConnectionWhere>;
  bow_NOT?: InputMaybe<BowWhere>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  content_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  content_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  content_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["Int"]["input"]>;
  date_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  date_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  note?: InputMaybe<NoteWhere>;
  noteAggregate?: InputMaybe<CommentNoteAggregateInput>;
  noteConnection?: InputMaybe<CommentNoteConnectionWhere>;
  noteConnection_NOT?: InputMaybe<CommentNoteConnectionWhere>;
  note_NOT?: InputMaybe<NoteWhere>;
  session?: InputMaybe<SessionWhere>;
  sessionAggregate?: InputMaybe<CommentSessionAggregateInput>;
  sessionConnection?: InputMaybe<CommentSessionConnectionWhere>;
  sessionConnection_NOT?: InputMaybe<CommentSessionConnectionWhere>;
  session_NOT?: InputMaybe<SessionWhere>;
  set?: InputMaybe<SetWhere>;
  setAggregate?: InputMaybe<CommentSetAggregateInput>;
  setConnection?: InputMaybe<CommentSetConnectionWhere>;
  setConnection_NOT?: InputMaybe<CommentSetConnectionWhere>;
  set_NOT?: InputMaybe<SetWhere>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type CommentsConnection = {
  __typename?: "CommentsConnection";
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type CreateArrowsMutationResponse = {
  __typename?: "CreateArrowsMutationResponse";
  arrows: Array<Arrow>;
  info: CreateInfo;
};

export type CreateAuthenticatorsMutationResponse = {
  __typename?: "CreateAuthenticatorsMutationResponse";
  authenticators: Array<Authenticator>;
  info: CreateInfo;
};

export type CreateBowsMutationResponse = {
  __typename?: "CreateBowsMutationResponse";
  bows: Array<Bow>;
  info: CreateInfo;
};

export type CreateCommentsMutationResponse = {
  __typename?: "CreateCommentsMutationResponse";
  comments: Array<Comment>;
  info: CreateInfo;
};

export type CreateEnemiesMutationResponse = {
  __typename?: "CreateEnemiesMutationResponse";
  enemies: Array<Enemy>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateLocationsMutationResponse = {
  __typename?: "CreateLocationsMutationResponse";
  info: CreateInfo;
  locations: Array<Location>;
};

export type CreateNotesMutationResponse = {
  __typename?: "CreateNotesMutationResponse";
  info: CreateInfo;
  notes: Array<Note>;
};

export type CreateRulesetsMutationResponse = {
  __typename?: "CreateRulesetsMutationResponse";
  info: CreateInfo;
  rulesets: Array<Ruleset>;
};

export type CreateSessionsMutationResponse = {
  __typename?: "CreateSessionsMutationResponse";
  info: CreateInfo;
  sessions: Array<Session>;
};

export type CreateSetsMutationResponse = {
  __typename?: "CreateSetsMutationResponse";
  info: CreateInfo;
  sets: Array<Set>;
};

export type CreateSyntheticSampleResponsesMutationResponse = {
  __typename?: "CreateSyntheticSampleResponsesMutationResponse";
  info: CreateInfo;
  syntheticSampleResponses: Array<SyntheticSampleResponse>;
};

export type CreateTargetsMutationResponse = {
  __typename?: "CreateTargetsMutationResponse";
  info: CreateInfo;
  targets: Array<Target>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type EnemiesConnection = {
  __typename?: "EnemiesConnection";
  edges: Array<EnemyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type Enemy = {
  __typename?: "Enemy";
  adaptive: Scalars["Boolean"]["output"];
  arrows: Array<Arrow>;
  arrowsAggregate?: Maybe<EnemyArrowArrowsAggregationSelection>;
  arrowsConnection: EnemyArrowsConnection;
  id: Scalars["ID"]["output"];
  max: Scalars["Float"]["output"];
  mean: Scalars["Float"]["output"];
  min: Scalars["Float"]["output"];
  mod: Scalars["Float"]["output"];
  name: Scalars["String"]["output"];
  sessions: Array<Session>;
  sessionsAggregate?: Maybe<EnemySessionSessionsAggregationSelection>;
  sessionsConnection: EnemySessionsConnection;
  sets: Array<Set>;
  setsAggregate?: Maybe<EnemySetSetsAggregationSelection>;
  setsConnection: EnemySetsConnection;
  std: Scalars["Float"]["output"];
};

export type EnemyArrowsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<ArrowOptions>;
  where?: InputMaybe<ArrowWhere>;
};

export type EnemyArrowsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ArrowWhere>;
};

export type EnemyArrowsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<EnemyArrowsConnectionSort>>;
  where?: InputMaybe<EnemyArrowsConnectionWhere>;
};

export type EnemySessionsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SessionOptions>;
  where?: InputMaybe<SessionWhere>;
};

export type EnemySessionsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SessionWhere>;
};

export type EnemySessionsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<EnemySessionsConnectionSort>>;
  where?: InputMaybe<EnemySessionsConnectionWhere>;
};

export type EnemySetsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};

export type EnemySetsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SetWhere>;
};

export type EnemySetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<EnemySetsConnectionSort>>;
  where?: InputMaybe<EnemySetsConnectionWhere>;
};

export type EnemyAggregateSelection = {
  __typename?: "EnemyAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  max: FloatAggregateSelection;
  mean: FloatAggregateSelection;
  min: FloatAggregateSelection;
  mod: FloatAggregateSelection;
  name: StringAggregateSelection;
  std: FloatAggregateSelection;
};

export type EnemyArrowArrowsAggregationSelection = {
  __typename?: "EnemyArrowArrowsAggregationSelection";
  count: Scalars["Int"]["output"];
  edge?: Maybe<EnemyArrowArrowsEdgeAggregateSelection>;
  node?: Maybe<EnemyArrowArrowsNodeAggregateSelection>;
};

export type EnemyArrowArrowsEdgeAggregateSelection = {
  __typename?: "EnemyArrowArrowsEdgeAggregateSelection";
  max: FloatAggregateSelection;
  mean: FloatAggregateSelection;
  min: FloatAggregateSelection;
  std: FloatAggregateSelection;
};

export type EnemyArrowArrowsNodeAggregateSelection = {
  __typename?: "EnemyArrowArrowsNodeAggregateSelection";
  angle: FloatAggregateSelection;
  id: IdAggregateSelection;
  number: IntAggregateSelection;
  offset: FloatAggregateSelection;
  value: IntAggregateSelection;
};

export type EnemyArrowsAggregateInput = {
  AND?: InputMaybe<Array<EnemyArrowsAggregateInput>>;
  NOT?: InputMaybe<EnemyArrowsAggregateInput>;
  OR?: InputMaybe<Array<EnemyArrowsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  edge?: InputMaybe<GenerationPropertiesAggregationWhereInput>;
  node?: InputMaybe<EnemyArrowsNodeAggregationWhereInput>;
};

export type EnemyArrowsConnectFieldInput = {
  connect?: InputMaybe<Array<ArrowConnectInput>>;
  edge: GenerationPropertiesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<ArrowConnectWhere>;
};

export type EnemyArrowsConnection = {
  __typename?: "EnemyArrowsConnection";
  edges: Array<EnemyArrowsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type EnemyArrowsConnectionSort = {
  edge?: InputMaybe<GenerationPropertiesSort>;
  node?: InputMaybe<ArrowSort>;
};

export type EnemyArrowsConnectionWhere = {
  AND?: InputMaybe<Array<EnemyArrowsConnectionWhere>>;
  NOT?: InputMaybe<EnemyArrowsConnectionWhere>;
  OR?: InputMaybe<Array<EnemyArrowsConnectionWhere>>;
  edge?: InputMaybe<GenerationPropertiesWhere>;
  node?: InputMaybe<ArrowWhere>;
};

export type EnemyArrowsCreateFieldInput = {
  edge: GenerationPropertiesCreateInput;
  node: ArrowCreateInput;
};

export type EnemyArrowsDeleteFieldInput = {
  delete?: InputMaybe<ArrowDeleteInput>;
  where?: InputMaybe<EnemyArrowsConnectionWhere>;
};

export type EnemyArrowsDisconnectFieldInput = {
  disconnect?: InputMaybe<ArrowDisconnectInput>;
  where?: InputMaybe<EnemyArrowsConnectionWhere>;
};

export type EnemyArrowsFieldInput = {
  connect?: InputMaybe<Array<EnemyArrowsConnectFieldInput>>;
  create?: InputMaybe<Array<EnemyArrowsCreateFieldInput>>;
};

export type EnemyArrowsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnemyArrowsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EnemyArrowsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EnemyArrowsNodeAggregationWhereInput>>;
  angle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  offset_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EnemyArrowsRelationship = {
  __typename?: "EnemyArrowsRelationship";
  cursor: Scalars["String"]["output"];
  node: Arrow;
  properties: GenerationProperties;
};

export type EnemyArrowsUpdateConnectionInput = {
  edge?: InputMaybe<GenerationPropertiesUpdateInput>;
  node?: InputMaybe<ArrowUpdateInput>;
};

export type EnemyArrowsUpdateFieldInput = {
  connect?: InputMaybe<Array<EnemyArrowsConnectFieldInput>>;
  create?: InputMaybe<Array<EnemyArrowsCreateFieldInput>>;
  delete?: InputMaybe<Array<EnemyArrowsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EnemyArrowsDisconnectFieldInput>>;
  update?: InputMaybe<EnemyArrowsUpdateConnectionInput>;
  where?: InputMaybe<EnemyArrowsConnectionWhere>;
};

export type EnemyConnectInput = {
  arrows?: InputMaybe<Array<EnemyArrowsConnectFieldInput>>;
  sessions?: InputMaybe<Array<EnemySessionsConnectFieldInput>>;
  sets?: InputMaybe<Array<EnemySetsConnectFieldInput>>;
};

export type EnemyConnectWhere = {
  node: EnemyWhere;
};

export type EnemyCreateInput = {
  adaptive?: Scalars["Boolean"]["input"];
  arrows?: InputMaybe<EnemyArrowsFieldInput>;
  max: Scalars["Float"]["input"];
  mean: Scalars["Float"]["input"];
  min: Scalars["Float"]["input"];
  mod?: Scalars["Float"]["input"];
  name: Scalars["String"]["input"];
  sessions?: InputMaybe<EnemySessionsFieldInput>;
  sets?: InputMaybe<EnemySetsFieldInput>;
  std: Scalars["Float"]["input"];
};

export type EnemyDeleteInput = {
  arrows?: InputMaybe<Array<EnemyArrowsDeleteFieldInput>>;
  sessions?: InputMaybe<Array<EnemySessionsDeleteFieldInput>>;
  sets?: InputMaybe<Array<EnemySetsDeleteFieldInput>>;
};

export type EnemyDisconnectInput = {
  arrows?: InputMaybe<Array<EnemyArrowsDisconnectFieldInput>>;
  sessions?: InputMaybe<Array<EnemySessionsDisconnectFieldInput>>;
  sets?: InputMaybe<Array<EnemySetsDisconnectFieldInput>>;
};

export type EnemyEdge = {
  __typename?: "EnemyEdge";
  cursor: Scalars["String"]["output"];
  node: Enemy;
};

export type EnemyOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more EnemySort objects to sort Enemies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EnemySort>>;
};

export type EnemyRelationInput = {
  arrows?: InputMaybe<Array<EnemyArrowsCreateFieldInput>>;
  sessions?: InputMaybe<Array<EnemySessionsCreateFieldInput>>;
  sets?: InputMaybe<Array<EnemySetsCreateFieldInput>>;
};

export type EnemySessionSessionsAggregationSelection = {
  __typename?: "EnemySessionSessionsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<EnemySessionSessionsNodeAggregateSelection>;
};

export type EnemySessionSessionsNodeAggregateSelection = {
  __typename?: "EnemySessionSessionsNodeAggregateSelection";
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type EnemySessionsAggregateInput = {
  AND?: InputMaybe<Array<EnemySessionsAggregateInput>>;
  NOT?: InputMaybe<EnemySessionsAggregateInput>;
  OR?: InputMaybe<Array<EnemySessionsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<EnemySessionsNodeAggregationWhereInput>;
};

export type EnemySessionsConnectFieldInput = {
  connect?: InputMaybe<Array<SessionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SessionConnectWhere>;
};

export type EnemySessionsConnection = {
  __typename?: "EnemySessionsConnection";
  edges: Array<EnemySessionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type EnemySessionsConnectionSort = {
  node?: InputMaybe<SessionSort>;
};

export type EnemySessionsConnectionWhere = {
  AND?: InputMaybe<Array<EnemySessionsConnectionWhere>>;
  NOT?: InputMaybe<EnemySessionsConnectionWhere>;
  OR?: InputMaybe<Array<EnemySessionsConnectionWhere>>;
  node?: InputMaybe<SessionWhere>;
};

export type EnemySessionsCreateFieldInput = {
  node: SessionCreateInput;
};

export type EnemySessionsDeleteFieldInput = {
  delete?: InputMaybe<SessionDeleteInput>;
  where?: InputMaybe<EnemySessionsConnectionWhere>;
};

export type EnemySessionsDisconnectFieldInput = {
  disconnect?: InputMaybe<SessionDisconnectInput>;
  where?: InputMaybe<EnemySessionsConnectionWhere>;
};

export type EnemySessionsFieldInput = {
  connect?: InputMaybe<Array<EnemySessionsConnectFieldInput>>;
  create?: InputMaybe<Array<EnemySessionsCreateFieldInput>>;
};

export type EnemySessionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnemySessionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EnemySessionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EnemySessionsNodeAggregationWhereInput>>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EnemySessionsRelationship = {
  __typename?: "EnemySessionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Session;
};

export type EnemySessionsUpdateConnectionInput = {
  node?: InputMaybe<SessionUpdateInput>;
};

export type EnemySessionsUpdateFieldInput = {
  connect?: InputMaybe<Array<EnemySessionsConnectFieldInput>>;
  create?: InputMaybe<Array<EnemySessionsCreateFieldInput>>;
  delete?: InputMaybe<Array<EnemySessionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EnemySessionsDisconnectFieldInput>>;
  update?: InputMaybe<EnemySessionsUpdateConnectionInput>;
  where?: InputMaybe<EnemySessionsConnectionWhere>;
};

export type EnemySetSetsAggregationSelection = {
  __typename?: "EnemySetSetsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<EnemySetSetsNodeAggregateSelection>;
};

export type EnemySetSetsNodeAggregateSelection = {
  __typename?: "EnemySetSetsNodeAggregateSelection";
  id: IdAggregateSelection;
  number: IntAggregateSelection;
};

export type EnemySetsAggregateInput = {
  AND?: InputMaybe<Array<EnemySetsAggregateInput>>;
  NOT?: InputMaybe<EnemySetsAggregateInput>;
  OR?: InputMaybe<Array<EnemySetsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<EnemySetsNodeAggregationWhereInput>;
};

export type EnemySetsConnectFieldInput = {
  connect?: InputMaybe<Array<SetConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SetConnectWhere>;
};

export type EnemySetsConnection = {
  __typename?: "EnemySetsConnection";
  edges: Array<EnemySetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type EnemySetsConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type EnemySetsConnectionWhere = {
  AND?: InputMaybe<Array<EnemySetsConnectionWhere>>;
  NOT?: InputMaybe<EnemySetsConnectionWhere>;
  OR?: InputMaybe<Array<EnemySetsConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type EnemySetsCreateFieldInput = {
  node: SetCreateInput;
};

export type EnemySetsDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<EnemySetsConnectionWhere>;
};

export type EnemySetsDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<EnemySetsConnectionWhere>;
};

export type EnemySetsFieldInput = {
  connect?: InputMaybe<Array<EnemySetsConnectFieldInput>>;
  create?: InputMaybe<Array<EnemySetsCreateFieldInput>>;
};

export type EnemySetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EnemySetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EnemySetsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<EnemySetsNodeAggregationWhereInput>>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EnemySetsRelationship = {
  __typename?: "EnemySetsRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
};

export type EnemySetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type EnemySetsUpdateFieldInput = {
  connect?: InputMaybe<Array<EnemySetsConnectFieldInput>>;
  create?: InputMaybe<Array<EnemySetsCreateFieldInput>>;
  delete?: InputMaybe<Array<EnemySetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EnemySetsDisconnectFieldInput>>;
  update?: InputMaybe<EnemySetsUpdateConnectionInput>;
  where?: InputMaybe<EnemySetsConnectionWhere>;
};

/** Fields to sort Enemies by. The order in which sorts are applied is not guaranteed when specifying many fields in one EnemySort object. */
export type EnemySort = {
  adaptive?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  max?: InputMaybe<SortDirection>;
  mean?: InputMaybe<SortDirection>;
  min?: InputMaybe<SortDirection>;
  mod?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  std?: InputMaybe<SortDirection>;
};

export type EnemyUpdateInput = {
  adaptive?: InputMaybe<Scalars["Boolean"]["input"]>;
  arrows?: InputMaybe<Array<EnemyArrowsUpdateFieldInput>>;
  max?: InputMaybe<Scalars["Float"]["input"]>;
  max_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  max_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  mean?: InputMaybe<Scalars["Float"]["input"]>;
  mean_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  mean_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  min?: InputMaybe<Scalars["Float"]["input"]>;
  min_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  min_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  mod?: InputMaybe<Scalars["Float"]["input"]>;
  mod_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  mod_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  mod_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  sessions?: InputMaybe<Array<EnemySessionsUpdateFieldInput>>;
  sets?: InputMaybe<Array<EnemySetsUpdateFieldInput>>;
  std?: InputMaybe<Scalars["Float"]["input"]>;
  std_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  std_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
};

export type EnemyWhere = {
  AND?: InputMaybe<Array<EnemyWhere>>;
  NOT?: InputMaybe<EnemyWhere>;
  OR?: InputMaybe<Array<EnemyWhere>>;
  adaptive?: InputMaybe<Scalars["Boolean"]["input"]>;
  arrowsAggregate?: InputMaybe<EnemyArrowsAggregateInput>;
  /** Return Enemies where all of the related EnemyArrowsConnections match this filter */
  arrowsConnection_ALL?: InputMaybe<EnemyArrowsConnectionWhere>;
  /** Return Enemies where none of the related EnemyArrowsConnections match this filter */
  arrowsConnection_NONE?: InputMaybe<EnemyArrowsConnectionWhere>;
  /** Return Enemies where one of the related EnemyArrowsConnections match this filter */
  arrowsConnection_SINGLE?: InputMaybe<EnemyArrowsConnectionWhere>;
  /** Return Enemies where some of the related EnemyArrowsConnections match this filter */
  arrowsConnection_SOME?: InputMaybe<EnemyArrowsConnectionWhere>;
  /** Return Enemies where all of the related Arrows match this filter */
  arrows_ALL?: InputMaybe<ArrowWhere>;
  /** Return Enemies where none of the related Arrows match this filter */
  arrows_NONE?: InputMaybe<ArrowWhere>;
  /** Return Enemies where one of the related Arrows match this filter */
  arrows_SINGLE?: InputMaybe<ArrowWhere>;
  /** Return Enemies where some of the related Arrows match this filter */
  arrows_SOME?: InputMaybe<ArrowWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  max?: InputMaybe<Scalars["Float"]["input"]>;
  max_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  max_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean?: InputMaybe<Scalars["Float"]["input"]>;
  mean_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  mean_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min?: InputMaybe<Scalars["Float"]["input"]>;
  min_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  min_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mod?: InputMaybe<Scalars["Float"]["input"]>;
  mod_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mod_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mod_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  mod_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mod_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  sessionsAggregate?: InputMaybe<EnemySessionsAggregateInput>;
  /** Return Enemies where all of the related EnemySessionsConnections match this filter */
  sessionsConnection_ALL?: InputMaybe<EnemySessionsConnectionWhere>;
  /** Return Enemies where none of the related EnemySessionsConnections match this filter */
  sessionsConnection_NONE?: InputMaybe<EnemySessionsConnectionWhere>;
  /** Return Enemies where one of the related EnemySessionsConnections match this filter */
  sessionsConnection_SINGLE?: InputMaybe<EnemySessionsConnectionWhere>;
  /** Return Enemies where some of the related EnemySessionsConnections match this filter */
  sessionsConnection_SOME?: InputMaybe<EnemySessionsConnectionWhere>;
  /** Return Enemies where all of the related Sessions match this filter */
  sessions_ALL?: InputMaybe<SessionWhere>;
  /** Return Enemies where none of the related Sessions match this filter */
  sessions_NONE?: InputMaybe<SessionWhere>;
  /** Return Enemies where one of the related Sessions match this filter */
  sessions_SINGLE?: InputMaybe<SessionWhere>;
  /** Return Enemies where some of the related Sessions match this filter */
  sessions_SOME?: InputMaybe<SessionWhere>;
  setsAggregate?: InputMaybe<EnemySetsAggregateInput>;
  /** Return Enemies where all of the related EnemySetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<EnemySetsConnectionWhere>;
  /** Return Enemies where none of the related EnemySetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<EnemySetsConnectionWhere>;
  /** Return Enemies where one of the related EnemySetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<EnemySetsConnectionWhere>;
  /** Return Enemies where some of the related EnemySetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<EnemySetsConnectionWhere>;
  /** Return Enemies where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Enemies where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Enemies where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Enemies where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
  std?: InputMaybe<Scalars["Float"]["input"]>;
  std_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  std_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type FloatAggregateSelection = {
  __typename?: "FloatAggregateSelection";
  average?: Maybe<Scalars["Float"]["output"]>;
  max?: Maybe<Scalars["Float"]["output"]>;
  min?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Float"]["output"]>;
};

/**
 * The edge properties for the following fields:
 * * Enemy.arrows
 */
export type GenerationProperties = {
  __typename?: "GenerationProperties";
  max: Scalars["Float"]["output"];
  mean: Scalars["Float"]["output"];
  min: Scalars["Float"]["output"];
  std: Scalars["Float"]["output"];
};

export type GenerationPropertiesAggregationWhereInput = {
  AND?: InputMaybe<Array<GenerationPropertiesAggregationWhereInput>>;
  NOT?: InputMaybe<GenerationPropertiesAggregationWhereInput>;
  OR?: InputMaybe<Array<GenerationPropertiesAggregationWhereInput>>;
  max_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mean_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  std_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  std_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  std_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type GenerationPropertiesCreateInput = {
  max: Scalars["Float"]["input"];
  mean: Scalars["Float"]["input"];
  min: Scalars["Float"]["input"];
  std: Scalars["Float"]["input"];
};

export type GenerationPropertiesSort = {
  max?: InputMaybe<SortDirection>;
  mean?: InputMaybe<SortDirection>;
  min?: InputMaybe<SortDirection>;
  std?: InputMaybe<SortDirection>;
};

export type GenerationPropertiesUpdateInput = {
  max?: InputMaybe<Scalars["Float"]["input"]>;
  max_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  max_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  mean?: InputMaybe<Scalars["Float"]["input"]>;
  mean_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  mean_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  min?: InputMaybe<Scalars["Float"]["input"]>;
  min_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  min_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  std?: InputMaybe<Scalars["Float"]["input"]>;
  std_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  std_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
};

export type GenerationPropertiesWhere = {
  AND?: InputMaybe<Array<GenerationPropertiesWhere>>;
  NOT?: InputMaybe<GenerationPropertiesWhere>;
  OR?: InputMaybe<Array<GenerationPropertiesWhere>>;
  max?: InputMaybe<Scalars["Float"]["input"]>;
  max_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  max_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean?: InputMaybe<Scalars["Float"]["input"]>;
  mean_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  mean_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min?: InputMaybe<Scalars["Float"]["input"]>;
  min_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  min_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  std?: InputMaybe<Scalars["Float"]["input"]>;
  std_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  std_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection";
  longest?: Maybe<Scalars["ID"]["output"]>;
  shortest?: Maybe<Scalars["ID"]["output"]>;
};

export type IntAggregateSelection = {
  __typename?: "IntAggregateSelection";
  average?: Maybe<Scalars["Float"]["output"]>;
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  sum?: Maybe<Scalars["Int"]["output"]>;
};

export type Location = {
  __typename?: "Location";
  comments: Array<Comment>;
  commentsAggregate?: Maybe<LocationCommentCommentsAggregationSelection>;
  commentsConnection: LocationCommentsConnection;
  coordinate: Point;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  notes: Array<Note>;
  notesAggregate?: Maybe<LocationNoteNotesAggregationSelection>;
  notesConnection: LocationNotesConnection;
  sessions: Array<Session>;
  sessionsAggregate?: Maybe<LocationSessionSessionsAggregationSelection>;
  sessionsConnection: LocationSessionsConnection;
};

export type LocationCommentsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type LocationCommentsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CommentWhere>;
};

export type LocationCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<LocationCommentsConnectionSort>>;
  where?: InputMaybe<LocationCommentsConnectionWhere>;
};

export type LocationNotesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<NoteOptions>;
  where?: InputMaybe<NoteWhere>;
};

export type LocationNotesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<NoteWhere>;
};

export type LocationNotesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<LocationNotesConnectionSort>>;
  where?: InputMaybe<LocationNotesConnectionWhere>;
};

export type LocationSessionsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SessionOptions>;
  where?: InputMaybe<SessionWhere>;
};

export type LocationSessionsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SessionWhere>;
};

export type LocationSessionsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<LocationSessionsConnectionSort>>;
  where?: InputMaybe<LocationSessionsConnectionWhere>;
};

export type LocationAggregateSelection = {
  __typename?: "LocationAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type LocationCommentCommentsAggregationSelection = {
  __typename?: "LocationCommentCommentsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LocationCommentCommentsNodeAggregateSelection>;
};

export type LocationCommentCommentsNodeAggregateSelection = {
  __typename?: "LocationCommentCommentsNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type LocationCommentsAggregateInput = {
  AND?: InputMaybe<Array<LocationCommentsAggregateInput>>;
  NOT?: InputMaybe<LocationCommentsAggregateInput>;
  OR?: InputMaybe<Array<LocationCommentsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<LocationCommentsNodeAggregationWhereInput>;
};

export type LocationCommentsConnectFieldInput = {
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<CommentConnectWhere>;
};

export type LocationCommentsConnection = {
  __typename?: "LocationCommentsConnection";
  edges: Array<LocationCommentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type LocationCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type LocationCommentsConnectionWhere = {
  AND?: InputMaybe<Array<LocationCommentsConnectionWhere>>;
  NOT?: InputMaybe<LocationCommentsConnectionWhere>;
  OR?: InputMaybe<Array<LocationCommentsConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type LocationCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type LocationCommentsDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<LocationCommentsConnectionWhere>;
};

export type LocationCommentsDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<LocationCommentsConnectionWhere>;
};

export type LocationCommentsFieldInput = {
  connect?: InputMaybe<Array<LocationCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<LocationCommentsCreateFieldInput>>;
};

export type LocationCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LocationCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LocationCommentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<LocationCommentsNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LocationCommentsRelationship = {
  __typename?: "LocationCommentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type LocationCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type LocationCommentsUpdateFieldInput = {
  connect?: InputMaybe<Array<LocationCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<LocationCommentsCreateFieldInput>>;
  delete?: InputMaybe<Array<LocationCommentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<LocationCommentsDisconnectFieldInput>>;
  update?: InputMaybe<LocationCommentsUpdateConnectionInput>;
  where?: InputMaybe<LocationCommentsConnectionWhere>;
};

export type LocationConnectInput = {
  comments?: InputMaybe<Array<LocationCommentsConnectFieldInput>>;
  notes?: InputMaybe<Array<LocationNotesConnectFieldInput>>;
  sessions?: InputMaybe<Array<LocationSessionsConnectFieldInput>>;
};

export type LocationConnectWhere = {
  node: LocationWhere;
};

export type LocationCreateInput = {
  comments?: InputMaybe<LocationCommentsFieldInput>;
  coordinate: PointInput;
  name: Scalars["String"]["input"];
  notes?: InputMaybe<LocationNotesFieldInput>;
  sessions?: InputMaybe<LocationSessionsFieldInput>;
};

export type LocationDeleteInput = {
  comments?: InputMaybe<Array<LocationCommentsDeleteFieldInput>>;
  notes?: InputMaybe<Array<LocationNotesDeleteFieldInput>>;
  sessions?: InputMaybe<Array<LocationSessionsDeleteFieldInput>>;
};

export type LocationDisconnectInput = {
  comments?: InputMaybe<Array<LocationCommentsDisconnectFieldInput>>;
  notes?: InputMaybe<Array<LocationNotesDisconnectFieldInput>>;
  sessions?: InputMaybe<Array<LocationSessionsDisconnectFieldInput>>;
};

export type LocationEdge = {
  __typename?: "LocationEdge";
  cursor: Scalars["String"]["output"];
  node: Location;
};

export type LocationNoteNotesAggregationSelection = {
  __typename?: "LocationNoteNotesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LocationNoteNotesNodeAggregateSelection>;
};

export type LocationNoteNotesNodeAggregateSelection = {
  __typename?: "LocationNoteNotesNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type LocationNotesAggregateInput = {
  AND?: InputMaybe<Array<LocationNotesAggregateInput>>;
  NOT?: InputMaybe<LocationNotesAggregateInput>;
  OR?: InputMaybe<Array<LocationNotesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<LocationNotesNodeAggregationWhereInput>;
};

export type LocationNotesConnectFieldInput = {
  connect?: InputMaybe<Array<NoteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<NoteConnectWhere>;
};

export type LocationNotesConnection = {
  __typename?: "LocationNotesConnection";
  edges: Array<LocationNotesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type LocationNotesConnectionSort = {
  node?: InputMaybe<NoteSort>;
};

export type LocationNotesConnectionWhere = {
  AND?: InputMaybe<Array<LocationNotesConnectionWhere>>;
  NOT?: InputMaybe<LocationNotesConnectionWhere>;
  OR?: InputMaybe<Array<LocationNotesConnectionWhere>>;
  node?: InputMaybe<NoteWhere>;
};

export type LocationNotesCreateFieldInput = {
  node: NoteCreateInput;
};

export type LocationNotesDeleteFieldInput = {
  delete?: InputMaybe<NoteDeleteInput>;
  where?: InputMaybe<LocationNotesConnectionWhere>;
};

export type LocationNotesDisconnectFieldInput = {
  disconnect?: InputMaybe<NoteDisconnectInput>;
  where?: InputMaybe<LocationNotesConnectionWhere>;
};

export type LocationNotesFieldInput = {
  connect?: InputMaybe<Array<LocationNotesConnectFieldInput>>;
  create?: InputMaybe<Array<LocationNotesCreateFieldInput>>;
};

export type LocationNotesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LocationNotesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LocationNotesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<LocationNotesNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LocationNotesRelationship = {
  __typename?: "LocationNotesRelationship";
  cursor: Scalars["String"]["output"];
  node: Note;
};

export type LocationNotesUpdateConnectionInput = {
  node?: InputMaybe<NoteUpdateInput>;
};

export type LocationNotesUpdateFieldInput = {
  connect?: InputMaybe<Array<LocationNotesConnectFieldInput>>;
  create?: InputMaybe<Array<LocationNotesCreateFieldInput>>;
  delete?: InputMaybe<Array<LocationNotesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<LocationNotesDisconnectFieldInput>>;
  update?: InputMaybe<LocationNotesUpdateConnectionInput>;
  where?: InputMaybe<LocationNotesConnectionWhere>;
};

export type LocationOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more LocationSort objects to sort Locations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LocationSort>>;
};

export type LocationRelationInput = {
  comments?: InputMaybe<Array<LocationCommentsCreateFieldInput>>;
  notes?: InputMaybe<Array<LocationNotesCreateFieldInput>>;
  sessions?: InputMaybe<Array<LocationSessionsCreateFieldInput>>;
};

export type LocationSessionSessionsAggregationSelection = {
  __typename?: "LocationSessionSessionsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<LocationSessionSessionsNodeAggregateSelection>;
};

export type LocationSessionSessionsNodeAggregateSelection = {
  __typename?: "LocationSessionSessionsNodeAggregateSelection";
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type LocationSessionsAggregateInput = {
  AND?: InputMaybe<Array<LocationSessionsAggregateInput>>;
  NOT?: InputMaybe<LocationSessionsAggregateInput>;
  OR?: InputMaybe<Array<LocationSessionsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<LocationSessionsNodeAggregationWhereInput>;
};

export type LocationSessionsConnectFieldInput = {
  connect?: InputMaybe<Array<SessionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SessionConnectWhere>;
};

export type LocationSessionsConnection = {
  __typename?: "LocationSessionsConnection";
  edges: Array<LocationSessionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type LocationSessionsConnectionSort = {
  node?: InputMaybe<SessionSort>;
};

export type LocationSessionsConnectionWhere = {
  AND?: InputMaybe<Array<LocationSessionsConnectionWhere>>;
  NOT?: InputMaybe<LocationSessionsConnectionWhere>;
  OR?: InputMaybe<Array<LocationSessionsConnectionWhere>>;
  node?: InputMaybe<SessionWhere>;
};

export type LocationSessionsCreateFieldInput = {
  node: SessionCreateInput;
};

export type LocationSessionsDeleteFieldInput = {
  delete?: InputMaybe<SessionDeleteInput>;
  where?: InputMaybe<LocationSessionsConnectionWhere>;
};

export type LocationSessionsDisconnectFieldInput = {
  disconnect?: InputMaybe<SessionDisconnectInput>;
  where?: InputMaybe<LocationSessionsConnectionWhere>;
};

export type LocationSessionsFieldInput = {
  connect?: InputMaybe<Array<LocationSessionsConnectFieldInput>>;
  create?: InputMaybe<Array<LocationSessionsCreateFieldInput>>;
};

export type LocationSessionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LocationSessionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LocationSessionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<LocationSessionsNodeAggregationWhereInput>>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LocationSessionsRelationship = {
  __typename?: "LocationSessionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Session;
};

export type LocationSessionsUpdateConnectionInput = {
  node?: InputMaybe<SessionUpdateInput>;
};

export type LocationSessionsUpdateFieldInput = {
  connect?: InputMaybe<Array<LocationSessionsConnectFieldInput>>;
  create?: InputMaybe<Array<LocationSessionsCreateFieldInput>>;
  delete?: InputMaybe<Array<LocationSessionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<LocationSessionsDisconnectFieldInput>>;
  update?: InputMaybe<LocationSessionsUpdateConnectionInput>;
  where?: InputMaybe<LocationSessionsConnectionWhere>;
};

/** Fields to sort Locations by. The order in which sorts are applied is not guaranteed when specifying many fields in one LocationSort object. */
export type LocationSort = {
  coordinate?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type LocationUpdateInput = {
  comments?: InputMaybe<Array<LocationCommentsUpdateFieldInput>>;
  coordinate?: InputMaybe<PointInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Array<LocationNotesUpdateFieldInput>>;
  sessions?: InputMaybe<Array<LocationSessionsUpdateFieldInput>>;
};

export type LocationWhere = {
  AND?: InputMaybe<Array<LocationWhere>>;
  NOT?: InputMaybe<LocationWhere>;
  OR?: InputMaybe<Array<LocationWhere>>;
  commentsAggregate?: InputMaybe<LocationCommentsAggregateInput>;
  /** Return Locations where all of the related LocationCommentsConnections match this filter */
  commentsConnection_ALL?: InputMaybe<LocationCommentsConnectionWhere>;
  /** Return Locations where none of the related LocationCommentsConnections match this filter */
  commentsConnection_NONE?: InputMaybe<LocationCommentsConnectionWhere>;
  /** Return Locations where one of the related LocationCommentsConnections match this filter */
  commentsConnection_SINGLE?: InputMaybe<LocationCommentsConnectionWhere>;
  /** Return Locations where some of the related LocationCommentsConnections match this filter */
  commentsConnection_SOME?: InputMaybe<LocationCommentsConnectionWhere>;
  /** Return Locations where all of the related Comments match this filter */
  comments_ALL?: InputMaybe<CommentWhere>;
  /** Return Locations where none of the related Comments match this filter */
  comments_NONE?: InputMaybe<CommentWhere>;
  /** Return Locations where one of the related Comments match this filter */
  comments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Locations where some of the related Comments match this filter */
  comments_SOME?: InputMaybe<CommentWhere>;
  coordinate?: InputMaybe<PointInput>;
  coordinate_DISTANCE?: InputMaybe<PointDistance>;
  coordinate_GT?: InputMaybe<PointDistance>;
  coordinate_GTE?: InputMaybe<PointDistance>;
  coordinate_IN?: InputMaybe<Array<PointInput>>;
  coordinate_LT?: InputMaybe<PointDistance>;
  coordinate_LTE?: InputMaybe<PointDistance>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  notesAggregate?: InputMaybe<LocationNotesAggregateInput>;
  /** Return Locations where all of the related LocationNotesConnections match this filter */
  notesConnection_ALL?: InputMaybe<LocationNotesConnectionWhere>;
  /** Return Locations where none of the related LocationNotesConnections match this filter */
  notesConnection_NONE?: InputMaybe<LocationNotesConnectionWhere>;
  /** Return Locations where one of the related LocationNotesConnections match this filter */
  notesConnection_SINGLE?: InputMaybe<LocationNotesConnectionWhere>;
  /** Return Locations where some of the related LocationNotesConnections match this filter */
  notesConnection_SOME?: InputMaybe<LocationNotesConnectionWhere>;
  /** Return Locations where all of the related Notes match this filter */
  notes_ALL?: InputMaybe<NoteWhere>;
  /** Return Locations where none of the related Notes match this filter */
  notes_NONE?: InputMaybe<NoteWhere>;
  /** Return Locations where one of the related Notes match this filter */
  notes_SINGLE?: InputMaybe<NoteWhere>;
  /** Return Locations where some of the related Notes match this filter */
  notes_SOME?: InputMaybe<NoteWhere>;
  sessionsAggregate?: InputMaybe<LocationSessionsAggregateInput>;
  /** Return Locations where all of the related LocationSessionsConnections match this filter */
  sessionsConnection_ALL?: InputMaybe<LocationSessionsConnectionWhere>;
  /** Return Locations where none of the related LocationSessionsConnections match this filter */
  sessionsConnection_NONE?: InputMaybe<LocationSessionsConnectionWhere>;
  /** Return Locations where one of the related LocationSessionsConnections match this filter */
  sessionsConnection_SINGLE?: InputMaybe<LocationSessionsConnectionWhere>;
  /** Return Locations where some of the related LocationSessionsConnections match this filter */
  sessionsConnection_SOME?: InputMaybe<LocationSessionsConnectionWhere>;
  /** Return Locations where all of the related Sessions match this filter */
  sessions_ALL?: InputMaybe<SessionWhere>;
  /** Return Locations where none of the related Sessions match this filter */
  sessions_NONE?: InputMaybe<SessionWhere>;
  /** Return Locations where one of the related Sessions match this filter */
  sessions_SINGLE?: InputMaybe<SessionWhere>;
  /** Return Locations where some of the related Sessions match this filter */
  sessions_SOME?: InputMaybe<SessionWhere>;
};

export type LocationsConnection = {
  __typename?: "LocationsConnection";
  edges: Array<LocationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createArrows: CreateArrowsMutationResponse;
  createAuthenticators: CreateAuthenticatorsMutationResponse;
  createBows: CreateBowsMutationResponse;
  createComments: CreateCommentsMutationResponse;
  createEnemies: CreateEnemiesMutationResponse;
  createLocations: CreateLocationsMutationResponse;
  createNotes: CreateNotesMutationResponse;
  createRulesets: CreateRulesetsMutationResponse;
  createSessions: CreateSessionsMutationResponse;
  createSets: CreateSetsMutationResponse;
  createSyntheticSampleResponses: CreateSyntheticSampleResponsesMutationResponse;
  createTargets: CreateTargetsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteArrows: DeleteInfo;
  deleteAuthenticators: DeleteInfo;
  deleteBows: DeleteInfo;
  deleteComments: DeleteInfo;
  deleteEnemies: DeleteInfo;
  deleteLocations: DeleteInfo;
  deleteNotes: DeleteInfo;
  deleteRulesets: DeleteInfo;
  deleteSessions: DeleteInfo;
  deleteSets: DeleteInfo;
  deleteSyntheticSampleResponses: DeleteInfo;
  deleteTargets: DeleteInfo;
  deleteUsers: DeleteInfo;
  synthesize: SyntheticSampleResponse;
  updateArrows: UpdateArrowsMutationResponse;
  updateAuthenticators: UpdateAuthenticatorsMutationResponse;
  updateBows: UpdateBowsMutationResponse;
  updateComments: UpdateCommentsMutationResponse;
  updateEnemies: UpdateEnemiesMutationResponse;
  updateLocations: UpdateLocationsMutationResponse;
  updateNotes: UpdateNotesMutationResponse;
  updateRulesets: UpdateRulesetsMutationResponse;
  updateSessions: UpdateSessionsMutationResponse;
  updateSets: UpdateSetsMutationResponse;
  updateSyntheticSampleResponses: UpdateSyntheticSampleResponsesMutationResponse;
  updateTargets: UpdateTargetsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateArrowsArgs = {
  input: Array<ArrowCreateInput>;
};

export type MutationCreateAuthenticatorsArgs = {
  input: Array<AuthenticatorCreateInput>;
};

export type MutationCreateBowsArgs = {
  input: Array<BowCreateInput>;
};

export type MutationCreateCommentsArgs = {
  input: Array<CommentCreateInput>;
};

export type MutationCreateEnemiesArgs = {
  input: Array<EnemyCreateInput>;
};

export type MutationCreateLocationsArgs = {
  input: Array<LocationCreateInput>;
};

export type MutationCreateNotesArgs = {
  input: Array<NoteCreateInput>;
};

export type MutationCreateRulesetsArgs = {
  input: Array<RulesetCreateInput>;
};

export type MutationCreateSessionsArgs = {
  input: Array<SessionCreateInput>;
};

export type MutationCreateSetsArgs = {
  input: Array<SetCreateInput>;
};

export type MutationCreateSyntheticSampleResponsesArgs = {
  input: Array<SyntheticSampleResponseCreateInput>;
};

export type MutationCreateTargetsArgs = {
  input: Array<TargetCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteArrowsArgs = {
  delete?: InputMaybe<ArrowDeleteInput>;
  where?: InputMaybe<ArrowWhere>;
};

export type MutationDeleteAuthenticatorsArgs = {
  delete?: InputMaybe<AuthenticatorDeleteInput>;
  where?: InputMaybe<AuthenticatorWhere>;
};

export type MutationDeleteBowsArgs = {
  delete?: InputMaybe<BowDeleteInput>;
  where?: InputMaybe<BowWhere>;
};

export type MutationDeleteCommentsArgs = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<CommentWhere>;
};

export type MutationDeleteEnemiesArgs = {
  delete?: InputMaybe<EnemyDeleteInput>;
  where?: InputMaybe<EnemyWhere>;
};

export type MutationDeleteLocationsArgs = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<LocationWhere>;
};

export type MutationDeleteNotesArgs = {
  delete?: InputMaybe<NoteDeleteInput>;
  where?: InputMaybe<NoteWhere>;
};

export type MutationDeleteRulesetsArgs = {
  where?: InputMaybe<RulesetWhere>;
};

export type MutationDeleteSessionsArgs = {
  delete?: InputMaybe<SessionDeleteInput>;
  where?: InputMaybe<SessionWhere>;
};

export type MutationDeleteSetsArgs = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<SetWhere>;
};

export type MutationDeleteSyntheticSampleResponsesArgs = {
  where?: InputMaybe<SyntheticSampleResponseWhere>;
};

export type MutationDeleteTargetsArgs = {
  delete?: InputMaybe<TargetDeleteInput>;
  where?: InputMaybe<TargetWhere>;
};

export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};

export type MutationSynthesizeArgs = {
  payload: SyntheticSamplePropsInput;
};

export type MutationUpdateArrowsArgs = {
  connect?: InputMaybe<ArrowConnectInput>;
  connectOrCreate?: InputMaybe<ArrowConnectOrCreateInput>;
  create?: InputMaybe<ArrowRelationInput>;
  delete?: InputMaybe<ArrowDeleteInput>;
  disconnect?: InputMaybe<ArrowDisconnectInput>;
  update?: InputMaybe<ArrowUpdateInput>;
  where?: InputMaybe<ArrowWhere>;
};

export type MutationUpdateAuthenticatorsArgs = {
  connect?: InputMaybe<AuthenticatorConnectInput>;
  connectOrCreate?: InputMaybe<AuthenticatorConnectOrCreateInput>;
  create?: InputMaybe<AuthenticatorRelationInput>;
  delete?: InputMaybe<AuthenticatorDeleteInput>;
  disconnect?: InputMaybe<AuthenticatorDisconnectInput>;
  update?: InputMaybe<AuthenticatorUpdateInput>;
  where?: InputMaybe<AuthenticatorWhere>;
};

export type MutationUpdateBowsArgs = {
  connect?: InputMaybe<BowConnectInput>;
  connectOrCreate?: InputMaybe<BowConnectOrCreateInput>;
  create?: InputMaybe<BowRelationInput>;
  delete?: InputMaybe<BowDeleteInput>;
  disconnect?: InputMaybe<BowDisconnectInput>;
  update?: InputMaybe<BowUpdateInput>;
  where?: InputMaybe<BowWhere>;
};

export type MutationUpdateCommentsArgs = {
  connect?: InputMaybe<CommentConnectInput>;
  create?: InputMaybe<CommentRelationInput>;
  delete?: InputMaybe<CommentDeleteInput>;
  disconnect?: InputMaybe<CommentDisconnectInput>;
  update?: InputMaybe<CommentUpdateInput>;
  where?: InputMaybe<CommentWhere>;
};

export type MutationUpdateEnemiesArgs = {
  connect?: InputMaybe<EnemyConnectInput>;
  create?: InputMaybe<EnemyRelationInput>;
  delete?: InputMaybe<EnemyDeleteInput>;
  disconnect?: InputMaybe<EnemyDisconnectInput>;
  update?: InputMaybe<EnemyUpdateInput>;
  where?: InputMaybe<EnemyWhere>;
};

export type MutationUpdateLocationsArgs = {
  connect?: InputMaybe<LocationConnectInput>;
  create?: InputMaybe<LocationRelationInput>;
  delete?: InputMaybe<LocationDeleteInput>;
  disconnect?: InputMaybe<LocationDisconnectInput>;
  update?: InputMaybe<LocationUpdateInput>;
  where?: InputMaybe<LocationWhere>;
};

export type MutationUpdateNotesArgs = {
  connect?: InputMaybe<NoteConnectInput>;
  create?: InputMaybe<NoteRelationInput>;
  delete?: InputMaybe<NoteDeleteInput>;
  disconnect?: InputMaybe<NoteDisconnectInput>;
  update?: InputMaybe<NoteUpdateInput>;
  where?: InputMaybe<NoteWhere>;
};

export type MutationUpdateRulesetsArgs = {
  update?: InputMaybe<RulesetUpdateInput>;
  where?: InputMaybe<RulesetWhere>;
};

export type MutationUpdateSessionsArgs = {
  connect?: InputMaybe<SessionConnectInput>;
  connectOrCreate?: InputMaybe<SessionConnectOrCreateInput>;
  create?: InputMaybe<SessionRelationInput>;
  delete?: InputMaybe<SessionDeleteInput>;
  disconnect?: InputMaybe<SessionDisconnectInput>;
  update?: InputMaybe<SessionUpdateInput>;
  where?: InputMaybe<SessionWhere>;
};

export type MutationUpdateSetsArgs = {
  connect?: InputMaybe<SetConnectInput>;
  connectOrCreate?: InputMaybe<SetConnectOrCreateInput>;
  create?: InputMaybe<SetRelationInput>;
  delete?: InputMaybe<SetDeleteInput>;
  disconnect?: InputMaybe<SetDisconnectInput>;
  update?: InputMaybe<SetUpdateInput>;
  where?: InputMaybe<SetWhere>;
};

export type MutationUpdateSyntheticSampleResponsesArgs = {
  update?: InputMaybe<SyntheticSampleResponseUpdateInput>;
  where?: InputMaybe<SyntheticSampleResponseWhere>;
};

export type MutationUpdateTargetsArgs = {
  connect?: InputMaybe<TargetConnectInput>;
  create?: InputMaybe<TargetRelationInput>;
  delete?: InputMaybe<TargetDeleteInput>;
  disconnect?: InputMaybe<TargetDisconnectInput>;
  update?: InputMaybe<TargetUpdateInput>;
  where?: InputMaybe<TargetWhere>;
};

export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

export type Note = {
  __typename?: "Note";
  arrow?: Maybe<Arrow>;
  arrowAggregate?: Maybe<NoteArrowArrowAggregationSelection>;
  arrowConnection: NoteArrowConnection;
  bow?: Maybe<Bow>;
  bowAggregate?: Maybe<NoteBowBowAggregationSelection>;
  bowConnection: NoteBowConnection;
  comments: Array<Comment>;
  commentsAggregate?: Maybe<NoteCommentCommentsAggregationSelection>;
  commentsConnection: NoteCommentsConnection;
  content?: Maybe<Scalars["String"]["output"]>;
  date: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  session?: Maybe<Session>;
  sessionAggregate?: Maybe<NoteSessionSessionAggregationSelection>;
  sessionConnection: NoteSessionConnection;
  set?: Maybe<Set>;
  setAggregate?: Maybe<NoteSetSetAggregationSelection>;
  setConnection: NoteSetConnection;
  title: Scalars["String"]["output"];
};

export type NoteArrowAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ArrowWhere>;
};

export type NoteArrowConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<NoteArrowConnectionSort>>;
  where?: InputMaybe<NoteArrowConnectionWhere>;
};

export type NoteBowAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BowWhere>;
};

export type NoteBowConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<NoteBowConnectionSort>>;
  where?: InputMaybe<NoteBowConnectionWhere>;
};

export type NoteCommentsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type NoteCommentsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CommentWhere>;
};

export type NoteCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<NoteCommentsConnectionSort>>;
  where?: InputMaybe<NoteCommentsConnectionWhere>;
};

export type NoteSessionAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SessionWhere>;
};

export type NoteSessionConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<NoteSessionConnectionSort>>;
  where?: InputMaybe<NoteSessionConnectionWhere>;
};

export type NoteSetAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SetWhere>;
};

export type NoteSetConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<NoteSetConnectionSort>>;
  where?: InputMaybe<NoteSetConnectionWhere>;
};

export type NoteAggregateSelection = {
  __typename?: "NoteAggregateSelection";
  content: StringAggregateSelection;
  count: Scalars["Int"]["output"];
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type NoteArrowAggregateInput = {
  AND?: InputMaybe<Array<NoteArrowAggregateInput>>;
  NOT?: InputMaybe<NoteArrowAggregateInput>;
  OR?: InputMaybe<Array<NoteArrowAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<NoteArrowNodeAggregationWhereInput>;
};

export type NoteArrowArrowAggregationSelection = {
  __typename?: "NoteArrowArrowAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<NoteArrowArrowNodeAggregateSelection>;
};

export type NoteArrowArrowNodeAggregateSelection = {
  __typename?: "NoteArrowArrowNodeAggregateSelection";
  angle: FloatAggregateSelection;
  id: IdAggregateSelection;
  number: IntAggregateSelection;
  offset: FloatAggregateSelection;
  value: IntAggregateSelection;
};

export type NoteArrowConnectFieldInput = {
  connect?: InputMaybe<ArrowConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<ArrowConnectWhere>;
};

export type NoteArrowConnection = {
  __typename?: "NoteArrowConnection";
  edges: Array<NoteArrowRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type NoteArrowConnectionSort = {
  node?: InputMaybe<ArrowSort>;
};

export type NoteArrowConnectionWhere = {
  AND?: InputMaybe<Array<NoteArrowConnectionWhere>>;
  NOT?: InputMaybe<NoteArrowConnectionWhere>;
  OR?: InputMaybe<Array<NoteArrowConnectionWhere>>;
  node?: InputMaybe<ArrowWhere>;
};

export type NoteArrowCreateFieldInput = {
  node: ArrowCreateInput;
};

export type NoteArrowDeleteFieldInput = {
  delete?: InputMaybe<ArrowDeleteInput>;
  where?: InputMaybe<NoteArrowConnectionWhere>;
};

export type NoteArrowDisconnectFieldInput = {
  disconnect?: InputMaybe<ArrowDisconnectInput>;
  where?: InputMaybe<NoteArrowConnectionWhere>;
};

export type NoteArrowFieldInput = {
  connect?: InputMaybe<NoteArrowConnectFieldInput>;
  create?: InputMaybe<NoteArrowCreateFieldInput>;
};

export type NoteArrowNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NoteArrowNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NoteArrowNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NoteArrowNodeAggregationWhereInput>>;
  angle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  offset_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type NoteArrowRelationship = {
  __typename?: "NoteArrowRelationship";
  cursor: Scalars["String"]["output"];
  node: Arrow;
};

export type NoteArrowUpdateConnectionInput = {
  node?: InputMaybe<ArrowUpdateInput>;
};

export type NoteArrowUpdateFieldInput = {
  connect?: InputMaybe<NoteArrowConnectFieldInput>;
  create?: InputMaybe<NoteArrowCreateFieldInput>;
  delete?: InputMaybe<NoteArrowDeleteFieldInput>;
  disconnect?: InputMaybe<NoteArrowDisconnectFieldInput>;
  update?: InputMaybe<NoteArrowUpdateConnectionInput>;
  where?: InputMaybe<NoteArrowConnectionWhere>;
};

export type NoteBowAggregateInput = {
  AND?: InputMaybe<Array<NoteBowAggregateInput>>;
  NOT?: InputMaybe<NoteBowAggregateInput>;
  OR?: InputMaybe<Array<NoteBowAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<NoteBowNodeAggregationWhereInput>;
};

export type NoteBowBowAggregationSelection = {
  __typename?: "NoteBowBowAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<NoteBowBowNodeAggregateSelection>;
};

export type NoteBowBowNodeAggregateSelection = {
  __typename?: "NoteBowBowNodeAggregateSelection";
  brand: StringAggregateSelection;
  id: IdAggregateSelection;
  model: StringAggregateSelection;
};

export type NoteBowConnectFieldInput = {
  connect?: InputMaybe<BowConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<BowConnectWhere>;
};

export type NoteBowConnection = {
  __typename?: "NoteBowConnection";
  edges: Array<NoteBowRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type NoteBowConnectionSort = {
  node?: InputMaybe<BowSort>;
};

export type NoteBowConnectionWhere = {
  AND?: InputMaybe<Array<NoteBowConnectionWhere>>;
  NOT?: InputMaybe<NoteBowConnectionWhere>;
  OR?: InputMaybe<Array<NoteBowConnectionWhere>>;
  node?: InputMaybe<BowWhere>;
};

export type NoteBowCreateFieldInput = {
  node: BowCreateInput;
};

export type NoteBowDeleteFieldInput = {
  delete?: InputMaybe<BowDeleteInput>;
  where?: InputMaybe<NoteBowConnectionWhere>;
};

export type NoteBowDisconnectFieldInput = {
  disconnect?: InputMaybe<BowDisconnectInput>;
  where?: InputMaybe<NoteBowConnectionWhere>;
};

export type NoteBowFieldInput = {
  connect?: InputMaybe<NoteBowConnectFieldInput>;
  create?: InputMaybe<NoteBowCreateFieldInput>;
};

export type NoteBowNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NoteBowNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NoteBowNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NoteBowNodeAggregationWhereInput>>;
  brand_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  brand_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  model_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type NoteBowRelationship = {
  __typename?: "NoteBowRelationship";
  cursor: Scalars["String"]["output"];
  node: Bow;
};

export type NoteBowUpdateConnectionInput = {
  node?: InputMaybe<BowUpdateInput>;
};

export type NoteBowUpdateFieldInput = {
  connect?: InputMaybe<NoteBowConnectFieldInput>;
  create?: InputMaybe<NoteBowCreateFieldInput>;
  delete?: InputMaybe<NoteBowDeleteFieldInput>;
  disconnect?: InputMaybe<NoteBowDisconnectFieldInput>;
  update?: InputMaybe<NoteBowUpdateConnectionInput>;
  where?: InputMaybe<NoteBowConnectionWhere>;
};

export type NoteCommentCommentsAggregationSelection = {
  __typename?: "NoteCommentCommentsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<NoteCommentCommentsNodeAggregateSelection>;
};

export type NoteCommentCommentsNodeAggregateSelection = {
  __typename?: "NoteCommentCommentsNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type NoteCommentsAggregateInput = {
  AND?: InputMaybe<Array<NoteCommentsAggregateInput>>;
  NOT?: InputMaybe<NoteCommentsAggregateInput>;
  OR?: InputMaybe<Array<NoteCommentsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<NoteCommentsNodeAggregationWhereInput>;
};

export type NoteCommentsConnectFieldInput = {
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<CommentConnectWhere>;
};

export type NoteCommentsConnection = {
  __typename?: "NoteCommentsConnection";
  edges: Array<NoteCommentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type NoteCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type NoteCommentsConnectionWhere = {
  AND?: InputMaybe<Array<NoteCommentsConnectionWhere>>;
  NOT?: InputMaybe<NoteCommentsConnectionWhere>;
  OR?: InputMaybe<Array<NoteCommentsConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type NoteCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type NoteCommentsDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<NoteCommentsConnectionWhere>;
};

export type NoteCommentsDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<NoteCommentsConnectionWhere>;
};

export type NoteCommentsFieldInput = {
  connect?: InputMaybe<Array<NoteCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<NoteCommentsCreateFieldInput>>;
};

export type NoteCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NoteCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NoteCommentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NoteCommentsNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type NoteCommentsRelationship = {
  __typename?: "NoteCommentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type NoteCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type NoteCommentsUpdateFieldInput = {
  connect?: InputMaybe<Array<NoteCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<NoteCommentsCreateFieldInput>>;
  delete?: InputMaybe<Array<NoteCommentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<NoteCommentsDisconnectFieldInput>>;
  update?: InputMaybe<NoteCommentsUpdateConnectionInput>;
  where?: InputMaybe<NoteCommentsConnectionWhere>;
};

export type NoteConnectInput = {
  arrow?: InputMaybe<NoteArrowConnectFieldInput>;
  bow?: InputMaybe<NoteBowConnectFieldInput>;
  comments?: InputMaybe<Array<NoteCommentsConnectFieldInput>>;
  session?: InputMaybe<NoteSessionConnectFieldInput>;
  set?: InputMaybe<NoteSetConnectFieldInput>;
};

export type NoteConnectWhere = {
  node: NoteWhere;
};

export type NoteCreateInput = {
  arrow?: InputMaybe<NoteArrowFieldInput>;
  bow?: InputMaybe<NoteBowFieldInput>;
  comments?: InputMaybe<NoteCommentsFieldInput>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  date: Scalars["Int"]["input"];
  session?: InputMaybe<NoteSessionFieldInput>;
  set?: InputMaybe<NoteSetFieldInput>;
  title: Scalars["String"]["input"];
};

export type NoteDeleteInput = {
  arrow?: InputMaybe<NoteArrowDeleteFieldInput>;
  bow?: InputMaybe<NoteBowDeleteFieldInput>;
  comments?: InputMaybe<Array<NoteCommentsDeleteFieldInput>>;
  session?: InputMaybe<NoteSessionDeleteFieldInput>;
  set?: InputMaybe<NoteSetDeleteFieldInput>;
};

export type NoteDisconnectInput = {
  arrow?: InputMaybe<NoteArrowDisconnectFieldInput>;
  bow?: InputMaybe<NoteBowDisconnectFieldInput>;
  comments?: InputMaybe<Array<NoteCommentsDisconnectFieldInput>>;
  session?: InputMaybe<NoteSessionDisconnectFieldInput>;
  set?: InputMaybe<NoteSetDisconnectFieldInput>;
};

export type NoteEdge = {
  __typename?: "NoteEdge";
  cursor: Scalars["String"]["output"];
  node: Note;
};

export type NoteOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more NoteSort objects to sort Notes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<NoteSort>>;
};

export type NoteRelationInput = {
  arrow?: InputMaybe<NoteArrowCreateFieldInput>;
  bow?: InputMaybe<NoteBowCreateFieldInput>;
  comments?: InputMaybe<Array<NoteCommentsCreateFieldInput>>;
  session?: InputMaybe<NoteSessionCreateFieldInput>;
  set?: InputMaybe<NoteSetCreateFieldInput>;
};

export type NoteSessionAggregateInput = {
  AND?: InputMaybe<Array<NoteSessionAggregateInput>>;
  NOT?: InputMaybe<NoteSessionAggregateInput>;
  OR?: InputMaybe<Array<NoteSessionAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<NoteSessionNodeAggregationWhereInput>;
};

export type NoteSessionConnectFieldInput = {
  connect?: InputMaybe<SessionConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SessionConnectWhere>;
};

export type NoteSessionConnection = {
  __typename?: "NoteSessionConnection";
  edges: Array<NoteSessionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type NoteSessionConnectionSort = {
  node?: InputMaybe<SessionSort>;
};

export type NoteSessionConnectionWhere = {
  AND?: InputMaybe<Array<NoteSessionConnectionWhere>>;
  NOT?: InputMaybe<NoteSessionConnectionWhere>;
  OR?: InputMaybe<Array<NoteSessionConnectionWhere>>;
  node?: InputMaybe<SessionWhere>;
};

export type NoteSessionCreateFieldInput = {
  node: SessionCreateInput;
};

export type NoteSessionDeleteFieldInput = {
  delete?: InputMaybe<SessionDeleteInput>;
  where?: InputMaybe<NoteSessionConnectionWhere>;
};

export type NoteSessionDisconnectFieldInput = {
  disconnect?: InputMaybe<SessionDisconnectInput>;
  where?: InputMaybe<NoteSessionConnectionWhere>;
};

export type NoteSessionFieldInput = {
  connect?: InputMaybe<NoteSessionConnectFieldInput>;
  create?: InputMaybe<NoteSessionCreateFieldInput>;
};

export type NoteSessionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NoteSessionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NoteSessionNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NoteSessionNodeAggregationWhereInput>>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type NoteSessionRelationship = {
  __typename?: "NoteSessionRelationship";
  cursor: Scalars["String"]["output"];
  node: Session;
};

export type NoteSessionSessionAggregationSelection = {
  __typename?: "NoteSessionSessionAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<NoteSessionSessionNodeAggregateSelection>;
};

export type NoteSessionSessionNodeAggregateSelection = {
  __typename?: "NoteSessionSessionNodeAggregateSelection";
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type NoteSessionUpdateConnectionInput = {
  node?: InputMaybe<SessionUpdateInput>;
};

export type NoteSessionUpdateFieldInput = {
  connect?: InputMaybe<NoteSessionConnectFieldInput>;
  create?: InputMaybe<NoteSessionCreateFieldInput>;
  delete?: InputMaybe<NoteSessionDeleteFieldInput>;
  disconnect?: InputMaybe<NoteSessionDisconnectFieldInput>;
  update?: InputMaybe<NoteSessionUpdateConnectionInput>;
  where?: InputMaybe<NoteSessionConnectionWhere>;
};

export type NoteSetAggregateInput = {
  AND?: InputMaybe<Array<NoteSetAggregateInput>>;
  NOT?: InputMaybe<NoteSetAggregateInput>;
  OR?: InputMaybe<Array<NoteSetAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<NoteSetNodeAggregationWhereInput>;
};

export type NoteSetConnectFieldInput = {
  connect?: InputMaybe<SetConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SetConnectWhere>;
};

export type NoteSetConnection = {
  __typename?: "NoteSetConnection";
  edges: Array<NoteSetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type NoteSetConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type NoteSetConnectionWhere = {
  AND?: InputMaybe<Array<NoteSetConnectionWhere>>;
  NOT?: InputMaybe<NoteSetConnectionWhere>;
  OR?: InputMaybe<Array<NoteSetConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type NoteSetCreateFieldInput = {
  node: SetCreateInput;
};

export type NoteSetDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<NoteSetConnectionWhere>;
};

export type NoteSetDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<NoteSetConnectionWhere>;
};

export type NoteSetFieldInput = {
  connect?: InputMaybe<NoteSetConnectFieldInput>;
  create?: InputMaybe<NoteSetCreateFieldInput>;
};

export type NoteSetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NoteSetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NoteSetNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<NoteSetNodeAggregationWhereInput>>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type NoteSetRelationship = {
  __typename?: "NoteSetRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
};

export type NoteSetSetAggregationSelection = {
  __typename?: "NoteSetSetAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<NoteSetSetNodeAggregateSelection>;
};

export type NoteSetSetNodeAggregateSelection = {
  __typename?: "NoteSetSetNodeAggregateSelection";
  id: IdAggregateSelection;
  number: IntAggregateSelection;
};

export type NoteSetUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type NoteSetUpdateFieldInput = {
  connect?: InputMaybe<NoteSetConnectFieldInput>;
  create?: InputMaybe<NoteSetCreateFieldInput>;
  delete?: InputMaybe<NoteSetDeleteFieldInput>;
  disconnect?: InputMaybe<NoteSetDisconnectFieldInput>;
  update?: InputMaybe<NoteSetUpdateConnectionInput>;
  where?: InputMaybe<NoteSetConnectionWhere>;
};

/** Fields to sort Notes by. The order in which sorts are applied is not guaranteed when specifying many fields in one NoteSort object. */
export type NoteSort = {
  content?: InputMaybe<SortDirection>;
  date?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type NoteUpdateInput = {
  arrow?: InputMaybe<NoteArrowUpdateFieldInput>;
  bow?: InputMaybe<NoteBowUpdateFieldInput>;
  comments?: InputMaybe<Array<NoteCommentsUpdateFieldInput>>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["Int"]["input"]>;
  date_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  date_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  session?: InputMaybe<NoteSessionUpdateFieldInput>;
  set?: InputMaybe<NoteSetUpdateFieldInput>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type NoteWhere = {
  AND?: InputMaybe<Array<NoteWhere>>;
  NOT?: InputMaybe<NoteWhere>;
  OR?: InputMaybe<Array<NoteWhere>>;
  arrow?: InputMaybe<ArrowWhere>;
  arrowAggregate?: InputMaybe<NoteArrowAggregateInput>;
  arrowConnection?: InputMaybe<NoteArrowConnectionWhere>;
  arrowConnection_NOT?: InputMaybe<NoteArrowConnectionWhere>;
  arrow_NOT?: InputMaybe<ArrowWhere>;
  bow?: InputMaybe<BowWhere>;
  bowAggregate?: InputMaybe<NoteBowAggregateInput>;
  bowConnection?: InputMaybe<NoteBowConnectionWhere>;
  bowConnection_NOT?: InputMaybe<NoteBowConnectionWhere>;
  bow_NOT?: InputMaybe<BowWhere>;
  commentsAggregate?: InputMaybe<NoteCommentsAggregateInput>;
  /** Return Notes where all of the related NoteCommentsConnections match this filter */
  commentsConnection_ALL?: InputMaybe<NoteCommentsConnectionWhere>;
  /** Return Notes where none of the related NoteCommentsConnections match this filter */
  commentsConnection_NONE?: InputMaybe<NoteCommentsConnectionWhere>;
  /** Return Notes where one of the related NoteCommentsConnections match this filter */
  commentsConnection_SINGLE?: InputMaybe<NoteCommentsConnectionWhere>;
  /** Return Notes where some of the related NoteCommentsConnections match this filter */
  commentsConnection_SOME?: InputMaybe<NoteCommentsConnectionWhere>;
  /** Return Notes where all of the related Comments match this filter */
  comments_ALL?: InputMaybe<CommentWhere>;
  /** Return Notes where none of the related Comments match this filter */
  comments_NONE?: InputMaybe<CommentWhere>;
  /** Return Notes where one of the related Comments match this filter */
  comments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Notes where some of the related Comments match this filter */
  comments_SOME?: InputMaybe<CommentWhere>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  content_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  content_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  content_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  content_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["Int"]["input"]>;
  date_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  date_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  session?: InputMaybe<SessionWhere>;
  sessionAggregate?: InputMaybe<NoteSessionAggregateInput>;
  sessionConnection?: InputMaybe<NoteSessionConnectionWhere>;
  sessionConnection_NOT?: InputMaybe<NoteSessionConnectionWhere>;
  session_NOT?: InputMaybe<SessionWhere>;
  set?: InputMaybe<SetWhere>;
  setAggregate?: InputMaybe<NoteSetAggregateInput>;
  setConnection?: InputMaybe<NoteSetConnectionWhere>;
  setConnection_NOT?: InputMaybe<NoteSetConnectionWhere>;
  set_NOT?: InputMaybe<SetWhere>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  title_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type NotesConnection = {
  __typename?: "NotesConnection";
  edges: Array<NoteEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** A point in a coordinate system. For more information, see https://neo4j.com/docs/graphql/4/type-definitions/types/spatial/#point */
export type Point = {
  __typename?: "Point";
  crs: Scalars["String"]["output"];
  height?: Maybe<Scalars["Float"]["output"]>;
  latitude: Scalars["Float"]["output"];
  longitude: Scalars["Float"]["output"];
  srid: Scalars["Int"]["output"];
};

/** Input type for a point with a distance */
export type PointDistance = {
  /** The distance in metres to be used when comparing two points */
  distance: Scalars["Float"]["input"];
  point: PointInput;
};

/** Input type for a point */
export type PointInput = {
  height?: InputMaybe<Scalars["Float"]["input"]>;
  latitude: Scalars["Float"]["input"];
  longitude: Scalars["Float"]["input"];
};

export type Query = {
  __typename?: "Query";
  _service: _Service;
  archers: Array<Archer>;
  arrows: Array<Arrow>;
  arrowsAggregate: ArrowAggregateSelection;
  arrowsConnection: ArrowsConnection;
  authenticators: Array<Authenticator>;
  authenticatorsAggregate: AuthenticatorAggregateSelection;
  authenticatorsConnection: AuthenticatorsConnection;
  bows: Array<Bow>;
  bowsAggregate: BowAggregateSelection;
  bowsConnection: BowsConnection;
  comments: Array<Comment>;
  commentsAggregate: CommentAggregateSelection;
  commentsConnection: CommentsConnection;
  enemies: Array<Enemy>;
  enemiesAggregate: EnemyAggregateSelection;
  enemiesConnection: EnemiesConnection;
  locations: Array<Location>;
  locationsAggregate: LocationAggregateSelection;
  locationsConnection: LocationsConnection;
  notes: Array<Note>;
  notesAggregate: NoteAggregateSelection;
  notesConnection: NotesConnection;
  rulesets: Array<Ruleset>;
  rulesetsAggregate: RulesetAggregateSelection;
  rulesetsConnection: RulesetsConnection;
  sessions: Array<Session>;
  sessionsAggregate: SessionAggregateSelection;
  sessionsConnection: SessionsConnection;
  sets: Array<Set>;
  setsAggregate: SetAggregateSelection;
  setsConnection: SetsConnection;
  syntheticSampleResponses: Array<SyntheticSampleResponse>;
  syntheticSampleResponsesAggregate: SyntheticSampleResponseAggregateSelection;
  syntheticSampleResponsesConnection: SyntheticSampleResponsesConnection;
  targets: Array<Target>;
  targetsAggregate: TargetAggregateSelection;
  targetsConnection: TargetsConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};

export type QueryArchersArgs = {
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ArcherWhere>;
};

export type QueryArrowsArgs = {
  options?: InputMaybe<ArrowOptions>;
  where?: InputMaybe<ArrowWhere>;
};

export type QueryArrowsAggregateArgs = {
  where?: InputMaybe<ArrowWhere>;
};

export type QueryArrowsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<ArrowSort>>>;
  where?: InputMaybe<ArrowWhere>;
};

export type QueryAuthenticatorsArgs = {
  options?: InputMaybe<AuthenticatorOptions>;
  where?: InputMaybe<AuthenticatorWhere>;
};

export type QueryAuthenticatorsAggregateArgs = {
  where?: InputMaybe<AuthenticatorWhere>;
};

export type QueryAuthenticatorsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<AuthenticatorSort>>>;
  where?: InputMaybe<AuthenticatorWhere>;
};

export type QueryBowsArgs = {
  options?: InputMaybe<BowOptions>;
  where?: InputMaybe<BowWhere>;
};

export type QueryBowsAggregateArgs = {
  where?: InputMaybe<BowWhere>;
};

export type QueryBowsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<BowSort>>>;
  where?: InputMaybe<BowWhere>;
};

export type QueryCommentsArgs = {
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type QueryCommentsAggregateArgs = {
  where?: InputMaybe<CommentWhere>;
};

export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<CommentSort>>>;
  where?: InputMaybe<CommentWhere>;
};

export type QueryEnemiesArgs = {
  options?: InputMaybe<EnemyOptions>;
  where?: InputMaybe<EnemyWhere>;
};

export type QueryEnemiesAggregateArgs = {
  where?: InputMaybe<EnemyWhere>;
};

export type QueryEnemiesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<EnemySort>>>;
  where?: InputMaybe<EnemyWhere>;
};

export type QueryLocationsArgs = {
  options?: InputMaybe<LocationOptions>;
  where?: InputMaybe<LocationWhere>;
};

export type QueryLocationsAggregateArgs = {
  where?: InputMaybe<LocationWhere>;
};

export type QueryLocationsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<LocationSort>>>;
  where?: InputMaybe<LocationWhere>;
};

export type QueryNotesArgs = {
  options?: InputMaybe<NoteOptions>;
  where?: InputMaybe<NoteWhere>;
};

export type QueryNotesAggregateArgs = {
  where?: InputMaybe<NoteWhere>;
};

export type QueryNotesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<NoteSort>>>;
  where?: InputMaybe<NoteWhere>;
};

export type QueryRulesetsArgs = {
  options?: InputMaybe<RulesetOptions>;
  where?: InputMaybe<RulesetWhere>;
};

export type QueryRulesetsAggregateArgs = {
  where?: InputMaybe<RulesetWhere>;
};

export type QueryRulesetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<RulesetSort>>>;
  where?: InputMaybe<RulesetWhere>;
};

export type QuerySessionsArgs = {
  options?: InputMaybe<SessionOptions>;
  where?: InputMaybe<SessionWhere>;
};

export type QuerySessionsAggregateArgs = {
  where?: InputMaybe<SessionWhere>;
};

export type QuerySessionsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SessionSort>>>;
  where?: InputMaybe<SessionWhere>;
};

export type QuerySetsArgs = {
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};

export type QuerySetsAggregateArgs = {
  where?: InputMaybe<SetWhere>;
};

export type QuerySetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SetSort>>>;
  where?: InputMaybe<SetWhere>;
};

export type QuerySyntheticSampleResponsesArgs = {
  options?: InputMaybe<SyntheticSampleResponseOptions>;
  where?: InputMaybe<SyntheticSampleResponseWhere>;
};

export type QuerySyntheticSampleResponsesAggregateArgs = {
  where?: InputMaybe<SyntheticSampleResponseWhere>;
};

export type QuerySyntheticSampleResponsesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<SyntheticSampleResponseSort>>>;
  where?: InputMaybe<SyntheticSampleResponseWhere>;
};

export type QueryTargetsArgs = {
  options?: InputMaybe<TargetOptions>;
  where?: InputMaybe<TargetWhere>;
};

export type QueryTargetsAggregateArgs = {
  where?: InputMaybe<TargetWhere>;
};

export type QueryTargetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<TargetSort>>>;
  where?: InputMaybe<TargetWhere>;
};

export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

/** Input type for options that can be specified on a query operation. */
export type QueryOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Ruleset = {
  __typename?: "Ruleset";
  arrowsPerSet: Scalars["Int"]["output"];
  discipline: BowType;
  id: Scalars["ID"]["output"];
  mode: SessionMode;
  timePerArrow: Scalars["Int"]["output"];
  timer: TimerMode;
};

export type RulesetAggregateSelection = {
  __typename?: "RulesetAggregateSelection";
  arrowsPerSet: IntAggregateSelection;
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  timePerArrow: IntAggregateSelection;
};

export type RulesetConnectWhere = {
  node: RulesetWhere;
};

export type RulesetCreateInput = {
  arrowsPerSet: Scalars["Int"]["input"];
  discipline?: BowType;
  mode?: SessionMode;
  timePerArrow: Scalars["Int"]["input"];
  timer?: TimerMode;
};

export type RulesetEdge = {
  __typename?: "RulesetEdge";
  cursor: Scalars["String"]["output"];
  node: Ruleset;
};

export type RulesetOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more RulesetSort objects to sort Rulesets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RulesetSort>>;
};

/** Fields to sort Rulesets by. The order in which sorts are applied is not guaranteed when specifying many fields in one RulesetSort object. */
export type RulesetSort = {
  arrowsPerSet?: InputMaybe<SortDirection>;
  discipline?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  mode?: InputMaybe<SortDirection>;
  timePerArrow?: InputMaybe<SortDirection>;
  timer?: InputMaybe<SortDirection>;
};

export type RulesetUpdateInput = {
  arrowsPerSet?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  discipline?: InputMaybe<BowType>;
  mode?: InputMaybe<SessionMode>;
  timePerArrow?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  timer?: InputMaybe<TimerMode>;
};

export type RulesetWhere = {
  AND?: InputMaybe<Array<RulesetWhere>>;
  NOT?: InputMaybe<RulesetWhere>;
  OR?: InputMaybe<Array<RulesetWhere>>;
  arrowsPerSet?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_GT?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  arrowsPerSet_LT?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  discipline?: InputMaybe<BowType>;
  discipline_IN?: InputMaybe<Array<BowType>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  mode?: InputMaybe<SessionMode>;
  mode_IN?: InputMaybe<Array<SessionMode>>;
  timePerArrow?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  timePerArrow_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timer?: InputMaybe<TimerMode>;
  timer_IN?: InputMaybe<Array<TimerMode>>;
};

export type RulesetsConnection = {
  __typename?: "RulesetsConnection";
  edges: Array<RulesetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type Session = {
  __typename?: "Session";
  active: Scalars["Boolean"]["output"];
  comments: Array<Comment>;
  commentsAggregate?: Maybe<SessionCommentCommentsAggregationSelection>;
  commentsConnection: SessionCommentsConnection;
  date: Scalars["Int"]["output"];
  enemies: Array<Enemy>;
  enemiesAggregate?: Maybe<SessionEnemyEnemiesAggregationSelection>;
  enemiesConnection: SessionEnemiesConnection;
  id: Scalars["ID"]["output"];
  location?: Maybe<Location>;
  locationAggregate?: Maybe<SessionLocationLocationAggregationSelection>;
  locationConnection: SessionLocationConnection;
  name: Scalars["String"]["output"];
  notes: Array<Note>;
  notesAggregate?: Maybe<SessionNoteNotesAggregationSelection>;
  notesConnection: SessionNotesConnection;
  ruleset?: Maybe<Ruleset>;
  rulesetAggregate?: Maybe<SessionRulesetRulesetAggregationSelection>;
  rulesetConnection: SessionRulesetConnection;
  sets: Array<Set>;
  setsAggregate?: Maybe<SessionSetSetsAggregationSelection>;
  setsConnection: SessionSetsConnection;
  users: Array<User>;
  usersAggregate?: Maybe<SessionUserUsersAggregationSelection>;
  usersConnection: SessionUsersConnection;
};

export type SessionCommentsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type SessionCommentsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CommentWhere>;
};

export type SessionCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SessionCommentsConnectionSort>>;
  where?: InputMaybe<SessionCommentsConnectionWhere>;
};

export type SessionEnemiesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<EnemyOptions>;
  where?: InputMaybe<EnemyWhere>;
};

export type SessionEnemiesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<EnemyWhere>;
};

export type SessionEnemiesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SessionEnemiesConnectionSort>>;
  where?: InputMaybe<SessionEnemiesConnectionWhere>;
};

export type SessionLocationAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<LocationWhere>;
};

export type SessionLocationConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SessionLocationConnectionSort>>;
  where?: InputMaybe<SessionLocationConnectionWhere>;
};

export type SessionNotesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<NoteOptions>;
  where?: InputMaybe<NoteWhere>;
};

export type SessionNotesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<NoteWhere>;
};

export type SessionNotesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SessionNotesConnectionSort>>;
  where?: InputMaybe<SessionNotesConnectionWhere>;
};

export type SessionRulesetAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<RulesetWhere>;
};

export type SessionRulesetConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SessionRulesetConnectionSort>>;
  where?: InputMaybe<SessionRulesetConnectionWhere>;
};

export type SessionSetsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};

export type SessionSetsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SetWhere>;
};

export type SessionSetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SessionSetsConnectionSort>>;
  where?: InputMaybe<SessionSetsConnectionWhere>;
};

export type SessionUsersArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type SessionUsersAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<UserWhere>;
};

export type SessionUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SessionUsersConnectionSort>>;
  where?: InputMaybe<SessionUsersConnectionWhere>;
};

export type SessionAggregateSelection = {
  __typename?: "SessionAggregateSelection";
  count: Scalars["Int"]["output"];
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type SessionCommentCommentsAggregationSelection = {
  __typename?: "SessionCommentCommentsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SessionCommentCommentsNodeAggregateSelection>;
};

export type SessionCommentCommentsNodeAggregateSelection = {
  __typename?: "SessionCommentCommentsNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type SessionCommentsAggregateInput = {
  AND?: InputMaybe<Array<SessionCommentsAggregateInput>>;
  NOT?: InputMaybe<SessionCommentsAggregateInput>;
  OR?: InputMaybe<Array<SessionCommentsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SessionCommentsNodeAggregationWhereInput>;
};

export type SessionCommentsConnectFieldInput = {
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<CommentConnectWhere>;
};

export type SessionCommentsConnection = {
  __typename?: "SessionCommentsConnection";
  edges: Array<SessionCommentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SessionCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type SessionCommentsConnectionWhere = {
  AND?: InputMaybe<Array<SessionCommentsConnectionWhere>>;
  NOT?: InputMaybe<SessionCommentsConnectionWhere>;
  OR?: InputMaybe<Array<SessionCommentsConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type SessionCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type SessionCommentsDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<SessionCommentsConnectionWhere>;
};

export type SessionCommentsDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<SessionCommentsConnectionWhere>;
};

export type SessionCommentsFieldInput = {
  connect?: InputMaybe<Array<SessionCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<SessionCommentsCreateFieldInput>>;
};

export type SessionCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SessionCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SessionCommentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SessionCommentsNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SessionCommentsRelationship = {
  __typename?: "SessionCommentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type SessionCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type SessionCommentsUpdateFieldInput = {
  connect?: InputMaybe<Array<SessionCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<SessionCommentsCreateFieldInput>>;
  delete?: InputMaybe<Array<SessionCommentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SessionCommentsDisconnectFieldInput>>;
  update?: InputMaybe<SessionCommentsUpdateConnectionInput>;
  where?: InputMaybe<SessionCommentsConnectionWhere>;
};

export type SessionConnectInput = {
  comments?: InputMaybe<Array<SessionCommentsConnectFieldInput>>;
  enemies?: InputMaybe<Array<SessionEnemiesConnectFieldInput>>;
  location?: InputMaybe<SessionLocationConnectFieldInput>;
  notes?: InputMaybe<Array<SessionNotesConnectFieldInput>>;
  ruleset?: InputMaybe<SessionRulesetConnectFieldInput>;
  sets?: InputMaybe<Array<SessionSetsConnectFieldInput>>;
  users?: InputMaybe<Array<SessionUsersConnectFieldInput>>;
};

export type SessionConnectOrCreateInput = {
  users?: InputMaybe<Array<SessionUsersConnectOrCreateFieldInput>>;
};

export type SessionConnectWhere = {
  node: SessionWhere;
};

export type SessionCreateInput = {
  active?: Scalars["Boolean"]["input"];
  comments?: InputMaybe<SessionCommentsFieldInput>;
  date: Scalars["Int"]["input"];
  enemies?: InputMaybe<SessionEnemiesFieldInput>;
  location?: InputMaybe<SessionLocationFieldInput>;
  name: Scalars["String"]["input"];
  notes?: InputMaybe<SessionNotesFieldInput>;
  ruleset?: InputMaybe<SessionRulesetFieldInput>;
  sets?: InputMaybe<SessionSetsFieldInput>;
  users?: InputMaybe<SessionUsersFieldInput>;
};

export type SessionDeleteInput = {
  comments?: InputMaybe<Array<SessionCommentsDeleteFieldInput>>;
  enemies?: InputMaybe<Array<SessionEnemiesDeleteFieldInput>>;
  location?: InputMaybe<SessionLocationDeleteFieldInput>;
  notes?: InputMaybe<Array<SessionNotesDeleteFieldInput>>;
  ruleset?: InputMaybe<SessionRulesetDeleteFieldInput>;
  sets?: InputMaybe<Array<SessionSetsDeleteFieldInput>>;
  users?: InputMaybe<Array<SessionUsersDeleteFieldInput>>;
};

export type SessionDisconnectInput = {
  comments?: InputMaybe<Array<SessionCommentsDisconnectFieldInput>>;
  enemies?: InputMaybe<Array<SessionEnemiesDisconnectFieldInput>>;
  location?: InputMaybe<SessionLocationDisconnectFieldInput>;
  notes?: InputMaybe<Array<SessionNotesDisconnectFieldInput>>;
  ruleset?: InputMaybe<SessionRulesetDisconnectFieldInput>;
  sets?: InputMaybe<Array<SessionSetsDisconnectFieldInput>>;
  users?: InputMaybe<Array<SessionUsersDisconnectFieldInput>>;
};

export type SessionEdge = {
  __typename?: "SessionEdge";
  cursor: Scalars["String"]["output"];
  node: Session;
};

export type SessionEnemiesAggregateInput = {
  AND?: InputMaybe<Array<SessionEnemiesAggregateInput>>;
  NOT?: InputMaybe<SessionEnemiesAggregateInput>;
  OR?: InputMaybe<Array<SessionEnemiesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SessionEnemiesNodeAggregationWhereInput>;
};

export type SessionEnemiesConnectFieldInput = {
  connect?: InputMaybe<Array<EnemyConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<EnemyConnectWhere>;
};

export type SessionEnemiesConnection = {
  __typename?: "SessionEnemiesConnection";
  edges: Array<SessionEnemiesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SessionEnemiesConnectionSort = {
  node?: InputMaybe<EnemySort>;
};

export type SessionEnemiesConnectionWhere = {
  AND?: InputMaybe<Array<SessionEnemiesConnectionWhere>>;
  NOT?: InputMaybe<SessionEnemiesConnectionWhere>;
  OR?: InputMaybe<Array<SessionEnemiesConnectionWhere>>;
  node?: InputMaybe<EnemyWhere>;
};

export type SessionEnemiesCreateFieldInput = {
  node: EnemyCreateInput;
};

export type SessionEnemiesDeleteFieldInput = {
  delete?: InputMaybe<EnemyDeleteInput>;
  where?: InputMaybe<SessionEnemiesConnectionWhere>;
};

export type SessionEnemiesDisconnectFieldInput = {
  disconnect?: InputMaybe<EnemyDisconnectInput>;
  where?: InputMaybe<SessionEnemiesConnectionWhere>;
};

export type SessionEnemiesFieldInput = {
  connect?: InputMaybe<Array<SessionEnemiesConnectFieldInput>>;
  create?: InputMaybe<Array<SessionEnemiesCreateFieldInput>>;
};

export type SessionEnemiesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SessionEnemiesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SessionEnemiesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SessionEnemiesNodeAggregationWhereInput>>;
  max_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mean_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mod_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mod_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mod_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mod_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mod_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mod_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mod_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  mod_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mod_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mod_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mod_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  std_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  std_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  std_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  std_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SessionEnemiesRelationship = {
  __typename?: "SessionEnemiesRelationship";
  cursor: Scalars["String"]["output"];
  node: Enemy;
};

export type SessionEnemiesUpdateConnectionInput = {
  node?: InputMaybe<EnemyUpdateInput>;
};

export type SessionEnemiesUpdateFieldInput = {
  connect?: InputMaybe<Array<SessionEnemiesConnectFieldInput>>;
  create?: InputMaybe<Array<SessionEnemiesCreateFieldInput>>;
  delete?: InputMaybe<Array<SessionEnemiesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SessionEnemiesDisconnectFieldInput>>;
  update?: InputMaybe<SessionEnemiesUpdateConnectionInput>;
  where?: InputMaybe<SessionEnemiesConnectionWhere>;
};

export type SessionEnemyEnemiesAggregationSelection = {
  __typename?: "SessionEnemyEnemiesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SessionEnemyEnemiesNodeAggregateSelection>;
};

export type SessionEnemyEnemiesNodeAggregateSelection = {
  __typename?: "SessionEnemyEnemiesNodeAggregateSelection";
  id: IdAggregateSelection;
  max: FloatAggregateSelection;
  mean: FloatAggregateSelection;
  min: FloatAggregateSelection;
  mod: FloatAggregateSelection;
  name: StringAggregateSelection;
  std: FloatAggregateSelection;
};

export type SessionLocationAggregateInput = {
  AND?: InputMaybe<Array<SessionLocationAggregateInput>>;
  NOT?: InputMaybe<SessionLocationAggregateInput>;
  OR?: InputMaybe<Array<SessionLocationAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SessionLocationNodeAggregationWhereInput>;
};

export type SessionLocationConnectFieldInput = {
  connect?: InputMaybe<LocationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<LocationConnectWhere>;
};

export type SessionLocationConnection = {
  __typename?: "SessionLocationConnection";
  edges: Array<SessionLocationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SessionLocationConnectionSort = {
  node?: InputMaybe<LocationSort>;
};

export type SessionLocationConnectionWhere = {
  AND?: InputMaybe<Array<SessionLocationConnectionWhere>>;
  NOT?: InputMaybe<SessionLocationConnectionWhere>;
  OR?: InputMaybe<Array<SessionLocationConnectionWhere>>;
  node?: InputMaybe<LocationWhere>;
};

export type SessionLocationCreateFieldInput = {
  node: LocationCreateInput;
};

export type SessionLocationDeleteFieldInput = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<SessionLocationConnectionWhere>;
};

export type SessionLocationDisconnectFieldInput = {
  disconnect?: InputMaybe<LocationDisconnectInput>;
  where?: InputMaybe<SessionLocationConnectionWhere>;
};

export type SessionLocationFieldInput = {
  connect?: InputMaybe<SessionLocationConnectFieldInput>;
  create?: InputMaybe<SessionLocationCreateFieldInput>;
};

export type SessionLocationLocationAggregationSelection = {
  __typename?: "SessionLocationLocationAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SessionLocationLocationNodeAggregateSelection>;
};

export type SessionLocationLocationNodeAggregateSelection = {
  __typename?: "SessionLocationLocationNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type SessionLocationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SessionLocationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SessionLocationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SessionLocationNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SessionLocationRelationship = {
  __typename?: "SessionLocationRelationship";
  cursor: Scalars["String"]["output"];
  node: Location;
};

export type SessionLocationUpdateConnectionInput = {
  node?: InputMaybe<LocationUpdateInput>;
};

export type SessionLocationUpdateFieldInput = {
  connect?: InputMaybe<SessionLocationConnectFieldInput>;
  create?: InputMaybe<SessionLocationCreateFieldInput>;
  delete?: InputMaybe<SessionLocationDeleteFieldInput>;
  disconnect?: InputMaybe<SessionLocationDisconnectFieldInput>;
  update?: InputMaybe<SessionLocationUpdateConnectionInput>;
  where?: InputMaybe<SessionLocationConnectionWhere>;
};

export enum SessionMode {
  Set = "SET",
  Sum = "SUM",
}

export type SessionNoteNotesAggregationSelection = {
  __typename?: "SessionNoteNotesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SessionNoteNotesNodeAggregateSelection>;
};

export type SessionNoteNotesNodeAggregateSelection = {
  __typename?: "SessionNoteNotesNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type SessionNotesAggregateInput = {
  AND?: InputMaybe<Array<SessionNotesAggregateInput>>;
  NOT?: InputMaybe<SessionNotesAggregateInput>;
  OR?: InputMaybe<Array<SessionNotesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SessionNotesNodeAggregationWhereInput>;
};

export type SessionNotesConnectFieldInput = {
  connect?: InputMaybe<Array<NoteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<NoteConnectWhere>;
};

export type SessionNotesConnection = {
  __typename?: "SessionNotesConnection";
  edges: Array<SessionNotesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SessionNotesConnectionSort = {
  node?: InputMaybe<NoteSort>;
};

export type SessionNotesConnectionWhere = {
  AND?: InputMaybe<Array<SessionNotesConnectionWhere>>;
  NOT?: InputMaybe<SessionNotesConnectionWhere>;
  OR?: InputMaybe<Array<SessionNotesConnectionWhere>>;
  node?: InputMaybe<NoteWhere>;
};

export type SessionNotesCreateFieldInput = {
  node: NoteCreateInput;
};

export type SessionNotesDeleteFieldInput = {
  delete?: InputMaybe<NoteDeleteInput>;
  where?: InputMaybe<SessionNotesConnectionWhere>;
};

export type SessionNotesDisconnectFieldInput = {
  disconnect?: InputMaybe<NoteDisconnectInput>;
  where?: InputMaybe<SessionNotesConnectionWhere>;
};

export type SessionNotesFieldInput = {
  connect?: InputMaybe<Array<SessionNotesConnectFieldInput>>;
  create?: InputMaybe<Array<SessionNotesCreateFieldInput>>;
};

export type SessionNotesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SessionNotesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SessionNotesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SessionNotesNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SessionNotesRelationship = {
  __typename?: "SessionNotesRelationship";
  cursor: Scalars["String"]["output"];
  node: Note;
};

export type SessionNotesUpdateConnectionInput = {
  node?: InputMaybe<NoteUpdateInput>;
};

export type SessionNotesUpdateFieldInput = {
  connect?: InputMaybe<Array<SessionNotesConnectFieldInput>>;
  create?: InputMaybe<Array<SessionNotesCreateFieldInput>>;
  delete?: InputMaybe<Array<SessionNotesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SessionNotesDisconnectFieldInput>>;
  update?: InputMaybe<SessionNotesUpdateConnectionInput>;
  where?: InputMaybe<SessionNotesConnectionWhere>;
};

export type SessionOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SessionSort objects to sort Sessions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SessionSort>>;
};

export type SessionRelationInput = {
  comments?: InputMaybe<Array<SessionCommentsCreateFieldInput>>;
  enemies?: InputMaybe<Array<SessionEnemiesCreateFieldInput>>;
  location?: InputMaybe<SessionLocationCreateFieldInput>;
  notes?: InputMaybe<Array<SessionNotesCreateFieldInput>>;
  ruleset?: InputMaybe<SessionRulesetCreateFieldInput>;
  sets?: InputMaybe<Array<SessionSetsCreateFieldInput>>;
  users?: InputMaybe<Array<SessionUsersCreateFieldInput>>;
};

export type SessionRulesetAggregateInput = {
  AND?: InputMaybe<Array<SessionRulesetAggregateInput>>;
  NOT?: InputMaybe<SessionRulesetAggregateInput>;
  OR?: InputMaybe<Array<SessionRulesetAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SessionRulesetNodeAggregationWhereInput>;
};

export type SessionRulesetConnectFieldInput = {
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<RulesetConnectWhere>;
};

export type SessionRulesetConnection = {
  __typename?: "SessionRulesetConnection";
  edges: Array<SessionRulesetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SessionRulesetConnectionSort = {
  node?: InputMaybe<RulesetSort>;
};

export type SessionRulesetConnectionWhere = {
  AND?: InputMaybe<Array<SessionRulesetConnectionWhere>>;
  NOT?: InputMaybe<SessionRulesetConnectionWhere>;
  OR?: InputMaybe<Array<SessionRulesetConnectionWhere>>;
  node?: InputMaybe<RulesetWhere>;
};

export type SessionRulesetCreateFieldInput = {
  node: RulesetCreateInput;
};

export type SessionRulesetDeleteFieldInput = {
  where?: InputMaybe<SessionRulesetConnectionWhere>;
};

export type SessionRulesetDisconnectFieldInput = {
  where?: InputMaybe<SessionRulesetConnectionWhere>;
};

export type SessionRulesetFieldInput = {
  connect?: InputMaybe<SessionRulesetConnectFieldInput>;
  create?: InputMaybe<SessionRulesetCreateFieldInput>;
};

export type SessionRulesetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SessionRulesetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SessionRulesetNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SessionRulesetNodeAggregationWhereInput>>;
  arrowsPerSet_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  arrowsPerSet_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  arrowsPerSet_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  arrowsPerSet_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  arrowsPerSet_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  arrowsPerSet_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  arrowsPerSet_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  timePerArrow_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  timePerArrow_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  timePerArrow_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  timePerArrow_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  timePerArrow_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  timePerArrow_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SessionRulesetRelationship = {
  __typename?: "SessionRulesetRelationship";
  cursor: Scalars["String"]["output"];
  node: Ruleset;
};

export type SessionRulesetRulesetAggregationSelection = {
  __typename?: "SessionRulesetRulesetAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SessionRulesetRulesetNodeAggregateSelection>;
};

export type SessionRulesetRulesetNodeAggregateSelection = {
  __typename?: "SessionRulesetRulesetNodeAggregateSelection";
  arrowsPerSet: IntAggregateSelection;
  id: IdAggregateSelection;
  timePerArrow: IntAggregateSelection;
};

export type SessionRulesetUpdateConnectionInput = {
  node?: InputMaybe<RulesetUpdateInput>;
};

export type SessionRulesetUpdateFieldInput = {
  connect?: InputMaybe<SessionRulesetConnectFieldInput>;
  create?: InputMaybe<SessionRulesetCreateFieldInput>;
  delete?: InputMaybe<SessionRulesetDeleteFieldInput>;
  disconnect?: InputMaybe<SessionRulesetDisconnectFieldInput>;
  update?: InputMaybe<SessionRulesetUpdateConnectionInput>;
  where?: InputMaybe<SessionRulesetConnectionWhere>;
};

export type SessionSetSetsAggregationSelection = {
  __typename?: "SessionSetSetsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SessionSetSetsNodeAggregateSelection>;
};

export type SessionSetSetsNodeAggregateSelection = {
  __typename?: "SessionSetSetsNodeAggregateSelection";
  id: IdAggregateSelection;
  number: IntAggregateSelection;
};

export type SessionSetsAggregateInput = {
  AND?: InputMaybe<Array<SessionSetsAggregateInput>>;
  NOT?: InputMaybe<SessionSetsAggregateInput>;
  OR?: InputMaybe<Array<SessionSetsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SessionSetsNodeAggregationWhereInput>;
};

export type SessionSetsConnectFieldInput = {
  connect?: InputMaybe<Array<SetConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SetConnectWhere>;
};

export type SessionSetsConnection = {
  __typename?: "SessionSetsConnection";
  edges: Array<SessionSetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SessionSetsConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type SessionSetsConnectionWhere = {
  AND?: InputMaybe<Array<SessionSetsConnectionWhere>>;
  NOT?: InputMaybe<SessionSetsConnectionWhere>;
  OR?: InputMaybe<Array<SessionSetsConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type SessionSetsCreateFieldInput = {
  node: SetCreateInput;
};

export type SessionSetsDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<SessionSetsConnectionWhere>;
};

export type SessionSetsDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<SessionSetsConnectionWhere>;
};

export type SessionSetsFieldInput = {
  connect?: InputMaybe<Array<SessionSetsConnectFieldInput>>;
  create?: InputMaybe<Array<SessionSetsCreateFieldInput>>;
};

export type SessionSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SessionSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SessionSetsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SessionSetsNodeAggregationWhereInput>>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SessionSetsRelationship = {
  __typename?: "SessionSetsRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
};

export type SessionSetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type SessionSetsUpdateFieldInput = {
  connect?: InputMaybe<Array<SessionSetsConnectFieldInput>>;
  create?: InputMaybe<Array<SessionSetsCreateFieldInput>>;
  delete?: InputMaybe<Array<SessionSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SessionSetsDisconnectFieldInput>>;
  update?: InputMaybe<SessionSetsUpdateConnectionInput>;
  where?: InputMaybe<SessionSetsConnectionWhere>;
};

/** Fields to sort Sessions by. The order in which sorts are applied is not guaranteed when specifying many fields in one SessionSort object. */
export type SessionSort = {
  active?: InputMaybe<SortDirection>;
  date?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type SessionUpdateInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  comments?: InputMaybe<Array<SessionCommentsUpdateFieldInput>>;
  date?: InputMaybe<Scalars["Int"]["input"]>;
  date_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  date_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  enemies?: InputMaybe<Array<SessionEnemiesUpdateFieldInput>>;
  location?: InputMaybe<SessionLocationUpdateFieldInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  notes?: InputMaybe<Array<SessionNotesUpdateFieldInput>>;
  ruleset?: InputMaybe<SessionRulesetUpdateFieldInput>;
  sets?: InputMaybe<Array<SessionSetsUpdateFieldInput>>;
  users?: InputMaybe<Array<SessionUsersUpdateFieldInput>>;
};

export type SessionUserUsersAggregationSelection = {
  __typename?: "SessionUserUsersAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SessionUserUsersNodeAggregateSelection>;
};

export type SessionUserUsersNodeAggregateSelection = {
  __typename?: "SessionUserUsersNodeAggregateSelection";
  authId: StringAggregateSelection;
  id: IdAggregateSelection;
};

export type SessionUsersAggregateInput = {
  AND?: InputMaybe<Array<SessionUsersAggregateInput>>;
  NOT?: InputMaybe<SessionUsersAggregateInput>;
  OR?: InputMaybe<Array<SessionUsersAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SessionUsersNodeAggregationWhereInput>;
};

export type SessionUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<UserConnectWhere>;
};

export type SessionUsersConnectOrCreateFieldInput = {
  onCreate: SessionUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type SessionUsersConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type SessionUsersConnection = {
  __typename?: "SessionUsersConnection";
  edges: Array<SessionUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SessionUsersConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type SessionUsersConnectionWhere = {
  AND?: InputMaybe<Array<SessionUsersConnectionWhere>>;
  NOT?: InputMaybe<SessionUsersConnectionWhere>;
  OR?: InputMaybe<Array<SessionUsersConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type SessionUsersCreateFieldInput = {
  node: UserCreateInput;
};

export type SessionUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<SessionUsersConnectionWhere>;
};

export type SessionUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<SessionUsersConnectionWhere>;
};

export type SessionUsersFieldInput = {
  connect?: InputMaybe<Array<SessionUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SessionUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SessionUsersCreateFieldInput>>;
};

export type SessionUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SessionUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SessionUsersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SessionUsersNodeAggregationWhereInput>>;
  authId_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  authId_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  authId_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  authId_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SessionUsersRelationship = {
  __typename?: "SessionUsersRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type SessionUsersUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type SessionUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<SessionUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<SessionUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<SessionUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<SessionUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SessionUsersDisconnectFieldInput>>;
  update?: InputMaybe<SessionUsersUpdateConnectionInput>;
  where?: InputMaybe<SessionUsersConnectionWhere>;
};

export type SessionWhere = {
  AND?: InputMaybe<Array<SessionWhere>>;
  NOT?: InputMaybe<SessionWhere>;
  OR?: InputMaybe<Array<SessionWhere>>;
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  commentsAggregate?: InputMaybe<SessionCommentsAggregateInput>;
  /** Return Sessions where all of the related SessionCommentsConnections match this filter */
  commentsConnection_ALL?: InputMaybe<SessionCommentsConnectionWhere>;
  /** Return Sessions where none of the related SessionCommentsConnections match this filter */
  commentsConnection_NONE?: InputMaybe<SessionCommentsConnectionWhere>;
  /** Return Sessions where one of the related SessionCommentsConnections match this filter */
  commentsConnection_SINGLE?: InputMaybe<SessionCommentsConnectionWhere>;
  /** Return Sessions where some of the related SessionCommentsConnections match this filter */
  commentsConnection_SOME?: InputMaybe<SessionCommentsConnectionWhere>;
  /** Return Sessions where all of the related Comments match this filter */
  comments_ALL?: InputMaybe<CommentWhere>;
  /** Return Sessions where none of the related Comments match this filter */
  comments_NONE?: InputMaybe<CommentWhere>;
  /** Return Sessions where one of the related Comments match this filter */
  comments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Sessions where some of the related Comments match this filter */
  comments_SOME?: InputMaybe<CommentWhere>;
  date?: InputMaybe<Scalars["Int"]["input"]>;
  date_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  date_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  enemiesAggregate?: InputMaybe<SessionEnemiesAggregateInput>;
  /** Return Sessions where all of the related SessionEnemiesConnections match this filter */
  enemiesConnection_ALL?: InputMaybe<SessionEnemiesConnectionWhere>;
  /** Return Sessions where none of the related SessionEnemiesConnections match this filter */
  enemiesConnection_NONE?: InputMaybe<SessionEnemiesConnectionWhere>;
  /** Return Sessions where one of the related SessionEnemiesConnections match this filter */
  enemiesConnection_SINGLE?: InputMaybe<SessionEnemiesConnectionWhere>;
  /** Return Sessions where some of the related SessionEnemiesConnections match this filter */
  enemiesConnection_SOME?: InputMaybe<SessionEnemiesConnectionWhere>;
  /** Return Sessions where all of the related Enemies match this filter */
  enemies_ALL?: InputMaybe<EnemyWhere>;
  /** Return Sessions where none of the related Enemies match this filter */
  enemies_NONE?: InputMaybe<EnemyWhere>;
  /** Return Sessions where one of the related Enemies match this filter */
  enemies_SINGLE?: InputMaybe<EnemyWhere>;
  /** Return Sessions where some of the related Enemies match this filter */
  enemies_SOME?: InputMaybe<EnemyWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  location?: InputMaybe<LocationWhere>;
  locationAggregate?: InputMaybe<SessionLocationAggregateInput>;
  locationConnection?: InputMaybe<SessionLocationConnectionWhere>;
  locationConnection_NOT?: InputMaybe<SessionLocationConnectionWhere>;
  location_NOT?: InputMaybe<LocationWhere>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  notesAggregate?: InputMaybe<SessionNotesAggregateInput>;
  /** Return Sessions where all of the related SessionNotesConnections match this filter */
  notesConnection_ALL?: InputMaybe<SessionNotesConnectionWhere>;
  /** Return Sessions where none of the related SessionNotesConnections match this filter */
  notesConnection_NONE?: InputMaybe<SessionNotesConnectionWhere>;
  /** Return Sessions where one of the related SessionNotesConnections match this filter */
  notesConnection_SINGLE?: InputMaybe<SessionNotesConnectionWhere>;
  /** Return Sessions where some of the related SessionNotesConnections match this filter */
  notesConnection_SOME?: InputMaybe<SessionNotesConnectionWhere>;
  /** Return Sessions where all of the related Notes match this filter */
  notes_ALL?: InputMaybe<NoteWhere>;
  /** Return Sessions where none of the related Notes match this filter */
  notes_NONE?: InputMaybe<NoteWhere>;
  /** Return Sessions where one of the related Notes match this filter */
  notes_SINGLE?: InputMaybe<NoteWhere>;
  /** Return Sessions where some of the related Notes match this filter */
  notes_SOME?: InputMaybe<NoteWhere>;
  ruleset?: InputMaybe<RulesetWhere>;
  rulesetAggregate?: InputMaybe<SessionRulesetAggregateInput>;
  rulesetConnection?: InputMaybe<SessionRulesetConnectionWhere>;
  rulesetConnection_NOT?: InputMaybe<SessionRulesetConnectionWhere>;
  ruleset_NOT?: InputMaybe<RulesetWhere>;
  setsAggregate?: InputMaybe<SessionSetsAggregateInput>;
  /** Return Sessions where all of the related SessionSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<SessionSetsConnectionWhere>;
  /** Return Sessions where none of the related SessionSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<SessionSetsConnectionWhere>;
  /** Return Sessions where one of the related SessionSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<SessionSetsConnectionWhere>;
  /** Return Sessions where some of the related SessionSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<SessionSetsConnectionWhere>;
  /** Return Sessions where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Sessions where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Sessions where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Sessions where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
  usersAggregate?: InputMaybe<SessionUsersAggregateInput>;
  /** Return Sessions where all of the related SessionUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<SessionUsersConnectionWhere>;
  /** Return Sessions where none of the related SessionUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<SessionUsersConnectionWhere>;
  /** Return Sessions where one of the related SessionUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<SessionUsersConnectionWhere>;
  /** Return Sessions where some of the related SessionUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<SessionUsersConnectionWhere>;
  /** Return Sessions where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Sessions where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Sessions where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Sessions where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
};

export type SessionsConnection = {
  __typename?: "SessionsConnection";
  edges: Array<SessionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type Set = {
  __typename?: "Set";
  archer: Archer;
  archerConnection: SetArcherConnection;
  arrows: Array<Arrow>;
  arrowsAggregate?: Maybe<SetArrowArrowsAggregationSelection>;
  arrowsConnection: SetArrowsConnection;
  arrowsInOrder: Scalars["Boolean"]["output"];
  comments: Array<Comment>;
  commentsAggregate?: Maybe<SetCommentCommentsAggregationSelection>;
  commentsConnection: SetCommentsConnection;
  id: Scalars["ID"]["output"];
  notes: Array<Note>;
  notesAggregate?: Maybe<SetNoteNotesAggregationSelection>;
  notesConnection: SetNotesConnection;
  number: Scalars["Int"]["output"];
  session: Session;
  sessionAggregate?: Maybe<SetSessionSessionAggregationSelection>;
  sessionConnection: SetSessionConnection;
  shootoff: Scalars["Boolean"]["output"];
  target: Target;
  targetAggregate?: Maybe<SetTargetTargetAggregationSelection>;
  targetConnection: SetTargetConnection;
};

export type SetArcherArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<ArcherWhere>;
};

export type SetArcherConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<SetArcherConnectionWhere>;
};

export type SetArrowsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<ArrowOptions>;
  where?: InputMaybe<ArrowWhere>;
};

export type SetArrowsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ArrowWhere>;
};

export type SetArrowsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SetArrowsConnectionSort>>;
  where?: InputMaybe<SetArrowsConnectionWhere>;
};

export type SetCommentsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<CommentOptions>;
  where?: InputMaybe<CommentWhere>;
};

export type SetCommentsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CommentWhere>;
};

export type SetCommentsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SetCommentsConnectionSort>>;
  where?: InputMaybe<SetCommentsConnectionWhere>;
};

export type SetNotesArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<NoteOptions>;
  where?: InputMaybe<NoteWhere>;
};

export type SetNotesAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<NoteWhere>;
};

export type SetNotesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SetNotesConnectionSort>>;
  where?: InputMaybe<SetNotesConnectionWhere>;
};

export type SetSessionAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SessionWhere>;
};

export type SetSessionConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SetSessionConnectionSort>>;
  where?: InputMaybe<SetSessionConnectionWhere>;
};

export type SetTargetAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<TargetWhere>;
};

export type SetTargetConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<SetTargetConnectionSort>>;
  where?: InputMaybe<SetTargetConnectionWhere>;
};

export type SetAggregateSelection = {
  __typename?: "SetAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  number: IntAggregateSelection;
};

export type SetArcherConnectInput = {
  Enemy?: InputMaybe<SetArcherEnemyConnectFieldInput>;
  User?: InputMaybe<SetArcherUserConnectFieldInput>;
};

export type SetArcherConnectOrCreateInput = {
  User?: InputMaybe<SetArcherUserConnectOrCreateFieldInput>;
};

export type SetArcherConnection = {
  __typename?: "SetArcherConnection";
  edges: Array<SetArcherRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SetArcherConnectionWhere = {
  Enemy?: InputMaybe<SetArcherEnemyConnectionWhere>;
  User?: InputMaybe<SetArcherUserConnectionWhere>;
};

export type SetArcherCreateFieldInput = {
  Enemy?: InputMaybe<SetArcherEnemyCreateFieldInput>;
  User?: InputMaybe<SetArcherUserCreateFieldInput>;
};

export type SetArcherCreateInput = {
  Enemy?: InputMaybe<SetArcherEnemyFieldInput>;
  User?: InputMaybe<SetArcherUserFieldInput>;
};

export type SetArcherDeleteInput = {
  Enemy?: InputMaybe<SetArcherEnemyDeleteFieldInput>;
  User?: InputMaybe<SetArcherUserDeleteFieldInput>;
};

export type SetArcherDisconnectInput = {
  Enemy?: InputMaybe<SetArcherEnemyDisconnectFieldInput>;
  User?: InputMaybe<SetArcherUserDisconnectFieldInput>;
};

export type SetArcherEnemyConnectFieldInput = {
  connect?: InputMaybe<EnemyConnectInput>;
  where?: InputMaybe<EnemyConnectWhere>;
};

export type SetArcherEnemyConnectionWhere = {
  AND?: InputMaybe<Array<SetArcherEnemyConnectionWhere>>;
  NOT?: InputMaybe<SetArcherEnemyConnectionWhere>;
  OR?: InputMaybe<Array<SetArcherEnemyConnectionWhere>>;
  node?: InputMaybe<EnemyWhere>;
};

export type SetArcherEnemyCreateFieldInput = {
  node: EnemyCreateInput;
};

export type SetArcherEnemyDeleteFieldInput = {
  delete?: InputMaybe<EnemyDeleteInput>;
  where?: InputMaybe<SetArcherEnemyConnectionWhere>;
};

export type SetArcherEnemyDisconnectFieldInput = {
  disconnect?: InputMaybe<EnemyDisconnectInput>;
  where?: InputMaybe<SetArcherEnemyConnectionWhere>;
};

export type SetArcherEnemyFieldInput = {
  connect?: InputMaybe<SetArcherEnemyConnectFieldInput>;
  create?: InputMaybe<SetArcherEnemyCreateFieldInput>;
};

export type SetArcherEnemyUpdateConnectionInput = {
  node?: InputMaybe<EnemyUpdateInput>;
};

export type SetArcherEnemyUpdateFieldInput = {
  connect?: InputMaybe<SetArcherEnemyConnectFieldInput>;
  create?: InputMaybe<SetArcherEnemyCreateFieldInput>;
  delete?: InputMaybe<SetArcherEnemyDeleteFieldInput>;
  disconnect?: InputMaybe<SetArcherEnemyDisconnectFieldInput>;
  update?: InputMaybe<SetArcherEnemyUpdateConnectionInput>;
  where?: InputMaybe<SetArcherEnemyConnectionWhere>;
};

export type SetArcherRelationship = {
  __typename?: "SetArcherRelationship";
  cursor: Scalars["String"]["output"];
  node: Archer;
};

export type SetArcherUpdateInput = {
  Enemy?: InputMaybe<SetArcherEnemyUpdateFieldInput>;
  User?: InputMaybe<SetArcherUserUpdateFieldInput>;
};

export type SetArcherUserConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  where?: InputMaybe<UserConnectWhere>;
};

export type SetArcherUserConnectOrCreateFieldInput = {
  onCreate: SetArcherUserConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type SetArcherUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
};

export type SetArcherUserConnectionWhere = {
  AND?: InputMaybe<Array<SetArcherUserConnectionWhere>>;
  NOT?: InputMaybe<SetArcherUserConnectionWhere>;
  OR?: InputMaybe<Array<SetArcherUserConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type SetArcherUserCreateFieldInput = {
  node: UserCreateInput;
};

export type SetArcherUserDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<SetArcherUserConnectionWhere>;
};

export type SetArcherUserDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<SetArcherUserConnectionWhere>;
};

export type SetArcherUserFieldInput = {
  connect?: InputMaybe<SetArcherUserConnectFieldInput>;
  connectOrCreate?: InputMaybe<SetArcherUserConnectOrCreateFieldInput>;
  create?: InputMaybe<SetArcherUserCreateFieldInput>;
};

export type SetArcherUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type SetArcherUserUpdateFieldInput = {
  connect?: InputMaybe<SetArcherUserConnectFieldInput>;
  connectOrCreate?: InputMaybe<SetArcherUserConnectOrCreateFieldInput>;
  create?: InputMaybe<SetArcherUserCreateFieldInput>;
  delete?: InputMaybe<SetArcherUserDeleteFieldInput>;
  disconnect?: InputMaybe<SetArcherUserDisconnectFieldInput>;
  update?: InputMaybe<SetArcherUserUpdateConnectionInput>;
  where?: InputMaybe<SetArcherUserConnectionWhere>;
};

export type SetArrowArrowsAggregationSelection = {
  __typename?: "SetArrowArrowsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SetArrowArrowsNodeAggregateSelection>;
};

export type SetArrowArrowsNodeAggregateSelection = {
  __typename?: "SetArrowArrowsNodeAggregateSelection";
  angle: FloatAggregateSelection;
  id: IdAggregateSelection;
  number: IntAggregateSelection;
  offset: FloatAggregateSelection;
  value: IntAggregateSelection;
};

export type SetArrowsAggregateInput = {
  AND?: InputMaybe<Array<SetArrowsAggregateInput>>;
  NOT?: InputMaybe<SetArrowsAggregateInput>;
  OR?: InputMaybe<Array<SetArrowsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SetArrowsNodeAggregationWhereInput>;
};

export type SetArrowsConnectFieldInput = {
  connect?: InputMaybe<Array<ArrowConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<ArrowConnectWhere>;
};

export type SetArrowsConnection = {
  __typename?: "SetArrowsConnection";
  edges: Array<SetArrowsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SetArrowsConnectionSort = {
  node?: InputMaybe<ArrowSort>;
};

export type SetArrowsConnectionWhere = {
  AND?: InputMaybe<Array<SetArrowsConnectionWhere>>;
  NOT?: InputMaybe<SetArrowsConnectionWhere>;
  OR?: InputMaybe<Array<SetArrowsConnectionWhere>>;
  node?: InputMaybe<ArrowWhere>;
};

export type SetArrowsCreateFieldInput = {
  node: ArrowCreateInput;
};

export type SetArrowsDeleteFieldInput = {
  delete?: InputMaybe<ArrowDeleteInput>;
  where?: InputMaybe<SetArrowsConnectionWhere>;
};

export type SetArrowsDisconnectFieldInput = {
  disconnect?: InputMaybe<ArrowDisconnectInput>;
  where?: InputMaybe<SetArrowsConnectionWhere>;
};

export type SetArrowsFieldInput = {
  connect?: InputMaybe<Array<SetArrowsConnectFieldInput>>;
  create?: InputMaybe<Array<SetArrowsCreateFieldInput>>;
};

export type SetArrowsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetArrowsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetArrowsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SetArrowsNodeAggregationWhereInput>>;
  angle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  offset_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetArrowsRelationship = {
  __typename?: "SetArrowsRelationship";
  cursor: Scalars["String"]["output"];
  node: Arrow;
};

export type SetArrowsUpdateConnectionInput = {
  node?: InputMaybe<ArrowUpdateInput>;
};

export type SetArrowsUpdateFieldInput = {
  connect?: InputMaybe<Array<SetArrowsConnectFieldInput>>;
  create?: InputMaybe<Array<SetArrowsCreateFieldInput>>;
  delete?: InputMaybe<Array<SetArrowsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SetArrowsDisconnectFieldInput>>;
  update?: InputMaybe<SetArrowsUpdateConnectionInput>;
  where?: InputMaybe<SetArrowsConnectionWhere>;
};

export type SetCommentCommentsAggregationSelection = {
  __typename?: "SetCommentCommentsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SetCommentCommentsNodeAggregateSelection>;
};

export type SetCommentCommentsNodeAggregateSelection = {
  __typename?: "SetCommentCommentsNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type SetCommentsAggregateInput = {
  AND?: InputMaybe<Array<SetCommentsAggregateInput>>;
  NOT?: InputMaybe<SetCommentsAggregateInput>;
  OR?: InputMaybe<Array<SetCommentsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SetCommentsNodeAggregationWhereInput>;
};

export type SetCommentsConnectFieldInput = {
  connect?: InputMaybe<Array<CommentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<CommentConnectWhere>;
};

export type SetCommentsConnection = {
  __typename?: "SetCommentsConnection";
  edges: Array<SetCommentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SetCommentsConnectionSort = {
  node?: InputMaybe<CommentSort>;
};

export type SetCommentsConnectionWhere = {
  AND?: InputMaybe<Array<SetCommentsConnectionWhere>>;
  NOT?: InputMaybe<SetCommentsConnectionWhere>;
  OR?: InputMaybe<Array<SetCommentsConnectionWhere>>;
  node?: InputMaybe<CommentWhere>;
};

export type SetCommentsCreateFieldInput = {
  node: CommentCreateInput;
};

export type SetCommentsDeleteFieldInput = {
  delete?: InputMaybe<CommentDeleteInput>;
  where?: InputMaybe<SetCommentsConnectionWhere>;
};

export type SetCommentsDisconnectFieldInput = {
  disconnect?: InputMaybe<CommentDisconnectInput>;
  where?: InputMaybe<SetCommentsConnectionWhere>;
};

export type SetCommentsFieldInput = {
  connect?: InputMaybe<Array<SetCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<SetCommentsCreateFieldInput>>;
};

export type SetCommentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetCommentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetCommentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SetCommentsNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetCommentsRelationship = {
  __typename?: "SetCommentsRelationship";
  cursor: Scalars["String"]["output"];
  node: Comment;
};

export type SetCommentsUpdateConnectionInput = {
  node?: InputMaybe<CommentUpdateInput>;
};

export type SetCommentsUpdateFieldInput = {
  connect?: InputMaybe<Array<SetCommentsConnectFieldInput>>;
  create?: InputMaybe<Array<SetCommentsCreateFieldInput>>;
  delete?: InputMaybe<Array<SetCommentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SetCommentsDisconnectFieldInput>>;
  update?: InputMaybe<SetCommentsUpdateConnectionInput>;
  where?: InputMaybe<SetCommentsConnectionWhere>;
};

export type SetConnectInput = {
  archer?: InputMaybe<SetArcherConnectInput>;
  arrows?: InputMaybe<Array<SetArrowsConnectFieldInput>>;
  comments?: InputMaybe<Array<SetCommentsConnectFieldInput>>;
  notes?: InputMaybe<Array<SetNotesConnectFieldInput>>;
  session?: InputMaybe<SetSessionConnectFieldInput>;
  target?: InputMaybe<SetTargetConnectFieldInput>;
};

export type SetConnectOrCreateInput = {
  archer?: InputMaybe<SetArcherConnectOrCreateInput>;
};

export type SetConnectWhere = {
  node: SetWhere;
};

export type SetCreateInput = {
  archer?: InputMaybe<SetArcherCreateInput>;
  arrows?: InputMaybe<SetArrowsFieldInput>;
  arrowsInOrder?: Scalars["Boolean"]["input"];
  comments?: InputMaybe<SetCommentsFieldInput>;
  notes?: InputMaybe<SetNotesFieldInput>;
  number: Scalars["Int"]["input"];
  session?: InputMaybe<SetSessionFieldInput>;
  shootoff?: Scalars["Boolean"]["input"];
  target?: InputMaybe<SetTargetFieldInput>;
};

export type SetDeleteInput = {
  archer?: InputMaybe<SetArcherDeleteInput>;
  arrows?: InputMaybe<Array<SetArrowsDeleteFieldInput>>;
  comments?: InputMaybe<Array<SetCommentsDeleteFieldInput>>;
  notes?: InputMaybe<Array<SetNotesDeleteFieldInput>>;
  session?: InputMaybe<SetSessionDeleteFieldInput>;
  target?: InputMaybe<SetTargetDeleteFieldInput>;
};

export type SetDisconnectInput = {
  archer?: InputMaybe<SetArcherDisconnectInput>;
  arrows?: InputMaybe<Array<SetArrowsDisconnectFieldInput>>;
  comments?: InputMaybe<Array<SetCommentsDisconnectFieldInput>>;
  notes?: InputMaybe<Array<SetNotesDisconnectFieldInput>>;
  session?: InputMaybe<SetSessionDisconnectFieldInput>;
  target?: InputMaybe<SetTargetDisconnectFieldInput>;
};

export type SetEdge = {
  __typename?: "SetEdge";
  cursor: Scalars["String"]["output"];
  node: Set;
};

export type SetNoteNotesAggregationSelection = {
  __typename?: "SetNoteNotesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SetNoteNotesNodeAggregateSelection>;
};

export type SetNoteNotesNodeAggregateSelection = {
  __typename?: "SetNoteNotesNodeAggregateSelection";
  content: StringAggregateSelection;
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  title: StringAggregateSelection;
};

export type SetNotesAggregateInput = {
  AND?: InputMaybe<Array<SetNotesAggregateInput>>;
  NOT?: InputMaybe<SetNotesAggregateInput>;
  OR?: InputMaybe<Array<SetNotesAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SetNotesNodeAggregationWhereInput>;
};

export type SetNotesConnectFieldInput = {
  connect?: InputMaybe<Array<NoteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<NoteConnectWhere>;
};

export type SetNotesConnection = {
  __typename?: "SetNotesConnection";
  edges: Array<SetNotesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SetNotesConnectionSort = {
  node?: InputMaybe<NoteSort>;
};

export type SetNotesConnectionWhere = {
  AND?: InputMaybe<Array<SetNotesConnectionWhere>>;
  NOT?: InputMaybe<SetNotesConnectionWhere>;
  OR?: InputMaybe<Array<SetNotesConnectionWhere>>;
  node?: InputMaybe<NoteWhere>;
};

export type SetNotesCreateFieldInput = {
  node: NoteCreateInput;
};

export type SetNotesDeleteFieldInput = {
  delete?: InputMaybe<NoteDeleteInput>;
  where?: InputMaybe<SetNotesConnectionWhere>;
};

export type SetNotesDisconnectFieldInput = {
  disconnect?: InputMaybe<NoteDisconnectInput>;
  where?: InputMaybe<SetNotesConnectionWhere>;
};

export type SetNotesFieldInput = {
  connect?: InputMaybe<Array<SetNotesConnectFieldInput>>;
  create?: InputMaybe<Array<SetNotesCreateFieldInput>>;
};

export type SetNotesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetNotesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetNotesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SetNotesNodeAggregationWhereInput>>;
  content_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  content_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  content_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  content_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetNotesRelationship = {
  __typename?: "SetNotesRelationship";
  cursor: Scalars["String"]["output"];
  node: Note;
};

export type SetNotesUpdateConnectionInput = {
  node?: InputMaybe<NoteUpdateInput>;
};

export type SetNotesUpdateFieldInput = {
  connect?: InputMaybe<Array<SetNotesConnectFieldInput>>;
  create?: InputMaybe<Array<SetNotesCreateFieldInput>>;
  delete?: InputMaybe<Array<SetNotesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SetNotesDisconnectFieldInput>>;
  update?: InputMaybe<SetNotesUpdateConnectionInput>;
  where?: InputMaybe<SetNotesConnectionWhere>;
};

export type SetOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SetSort objects to sort Sets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SetSort>>;
};

export type SetRelationInput = {
  archer?: InputMaybe<SetArcherCreateFieldInput>;
  arrows?: InputMaybe<Array<SetArrowsCreateFieldInput>>;
  comments?: InputMaybe<Array<SetCommentsCreateFieldInput>>;
  notes?: InputMaybe<Array<SetNotesCreateFieldInput>>;
  session?: InputMaybe<SetSessionCreateFieldInput>;
  target?: InputMaybe<SetTargetCreateFieldInput>;
};

export type SetSessionAggregateInput = {
  AND?: InputMaybe<Array<SetSessionAggregateInput>>;
  NOT?: InputMaybe<SetSessionAggregateInput>;
  OR?: InputMaybe<Array<SetSessionAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<SetSessionNodeAggregationWhereInput>;
};

export type SetSessionConnectFieldInput = {
  connect?: InputMaybe<SessionConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SessionConnectWhere>;
};

export type SetSessionConnection = {
  __typename?: "SetSessionConnection";
  edges: Array<SetSessionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SetSessionConnectionSort = {
  node?: InputMaybe<SessionSort>;
};

export type SetSessionConnectionWhere = {
  AND?: InputMaybe<Array<SetSessionConnectionWhere>>;
  NOT?: InputMaybe<SetSessionConnectionWhere>;
  OR?: InputMaybe<Array<SetSessionConnectionWhere>>;
  node?: InputMaybe<SessionWhere>;
};

export type SetSessionCreateFieldInput = {
  node: SessionCreateInput;
};

export type SetSessionDeleteFieldInput = {
  delete?: InputMaybe<SessionDeleteInput>;
  where?: InputMaybe<SetSessionConnectionWhere>;
};

export type SetSessionDisconnectFieldInput = {
  disconnect?: InputMaybe<SessionDisconnectInput>;
  where?: InputMaybe<SetSessionConnectionWhere>;
};

export type SetSessionFieldInput = {
  connect?: InputMaybe<SetSessionConnectFieldInput>;
  create?: InputMaybe<SetSessionCreateFieldInput>;
};

export type SetSessionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetSessionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetSessionNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SetSessionNodeAggregationWhereInput>>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetSessionRelationship = {
  __typename?: "SetSessionRelationship";
  cursor: Scalars["String"]["output"];
  node: Session;
};

export type SetSessionSessionAggregationSelection = {
  __typename?: "SetSessionSessionAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SetSessionSessionNodeAggregateSelection>;
};

export type SetSessionSessionNodeAggregateSelection = {
  __typename?: "SetSessionSessionNodeAggregateSelection";
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type SetSessionUpdateConnectionInput = {
  node?: InputMaybe<SessionUpdateInput>;
};

export type SetSessionUpdateFieldInput = {
  connect?: InputMaybe<SetSessionConnectFieldInput>;
  create?: InputMaybe<SetSessionCreateFieldInput>;
  delete?: InputMaybe<SetSessionDeleteFieldInput>;
  disconnect?: InputMaybe<SetSessionDisconnectFieldInput>;
  update?: InputMaybe<SetSessionUpdateConnectionInput>;
  where?: InputMaybe<SetSessionConnectionWhere>;
};

/** Fields to sort Sets by. The order in which sorts are applied is not guaranteed when specifying many fields in one SetSort object. */
export type SetSort = {
  arrowsInOrder?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  number?: InputMaybe<SortDirection>;
  shootoff?: InputMaybe<SortDirection>;
};

export type SetTargetAggregateInput = {
  AND?: InputMaybe<Array<SetTargetAggregateInput>>;
  NOT?: InputMaybe<SetTargetAggregateInput>;
  OR?: InputMaybe<Array<SetTargetAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  edge?: InputMaybe<AtTargetAggregationWhereInput>;
  node?: InputMaybe<SetTargetNodeAggregationWhereInput>;
};

export type SetTargetConnectFieldInput = {
  connect?: InputMaybe<TargetConnectInput>;
  edge: AtTargetCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<TargetConnectWhere>;
};

export type SetTargetConnection = {
  __typename?: "SetTargetConnection";
  edges: Array<SetTargetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type SetTargetConnectionSort = {
  edge?: InputMaybe<AtTargetSort>;
  node?: InputMaybe<TargetSort>;
};

export type SetTargetConnectionWhere = {
  AND?: InputMaybe<Array<SetTargetConnectionWhere>>;
  NOT?: InputMaybe<SetTargetConnectionWhere>;
  OR?: InputMaybe<Array<SetTargetConnectionWhere>>;
  edge?: InputMaybe<AtTargetWhere>;
  node?: InputMaybe<TargetWhere>;
};

export type SetTargetCreateFieldInput = {
  edge: AtTargetCreateInput;
  node: TargetCreateInput;
};

export type SetTargetDeleteFieldInput = {
  delete?: InputMaybe<TargetDeleteInput>;
  where?: InputMaybe<SetTargetConnectionWhere>;
};

export type SetTargetDisconnectFieldInput = {
  disconnect?: InputMaybe<TargetDisconnectInput>;
  where?: InputMaybe<SetTargetConnectionWhere>;
};

export type SetTargetFieldInput = {
  connect?: InputMaybe<SetTargetConnectFieldInput>;
  create?: InputMaybe<SetTargetCreateFieldInput>;
};

export type SetTargetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetTargetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetTargetNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SetTargetNodeAggregationWhereInput>>;
  max_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  max_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  max_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  max_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  max_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  max_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  max_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  max_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  max_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  max_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  min_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  min_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  min_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  min_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  min_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  min_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  min_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  min_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  min_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  radius_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  radius_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  radius_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  radius_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  radius_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  radius_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  rings_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  rings_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  rings_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  rings_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  rings_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  rings_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetTargetRelationship = {
  __typename?: "SetTargetRelationship";
  cursor: Scalars["String"]["output"];
  node: Target;
  properties: AtTarget;
};

export type SetTargetTargetAggregationSelection = {
  __typename?: "SetTargetTargetAggregationSelection";
  count: Scalars["Int"]["output"];
  edge?: Maybe<SetTargetTargetEdgeAggregateSelection>;
  node?: Maybe<SetTargetTargetNodeAggregateSelection>;
};

export type SetTargetTargetEdgeAggregateSelection = {
  __typename?: "SetTargetTargetEdgeAggregateSelection";
  distance: IntAggregateSelection;
};

export type SetTargetTargetNodeAggregateSelection = {
  __typename?: "SetTargetTargetNodeAggregateSelection";
  id: IdAggregateSelection;
  max: IntAggregateSelection;
  min: IntAggregateSelection;
  radius: IntAggregateSelection;
  rings: IntAggregateSelection;
  type: StringAggregateSelection;
};

export type SetTargetUpdateConnectionInput = {
  edge?: InputMaybe<AtTargetUpdateInput>;
  node?: InputMaybe<TargetUpdateInput>;
};

export type SetTargetUpdateFieldInput = {
  connect?: InputMaybe<SetTargetConnectFieldInput>;
  create?: InputMaybe<SetTargetCreateFieldInput>;
  delete?: InputMaybe<SetTargetDeleteFieldInput>;
  disconnect?: InputMaybe<SetTargetDisconnectFieldInput>;
  update?: InputMaybe<SetTargetUpdateConnectionInput>;
  where?: InputMaybe<SetTargetConnectionWhere>;
};

export type SetUpdateInput = {
  archer?: InputMaybe<SetArcherUpdateInput>;
  arrows?: InputMaybe<Array<SetArrowsUpdateFieldInput>>;
  arrowsInOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  comments?: InputMaybe<Array<SetCommentsUpdateFieldInput>>;
  notes?: InputMaybe<Array<SetNotesUpdateFieldInput>>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  number_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  session?: InputMaybe<SetSessionUpdateFieldInput>;
  shootoff?: InputMaybe<Scalars["Boolean"]["input"]>;
  target?: InputMaybe<SetTargetUpdateFieldInput>;
};

export type SetWhere = {
  AND?: InputMaybe<Array<SetWhere>>;
  NOT?: InputMaybe<SetWhere>;
  OR?: InputMaybe<Array<SetWhere>>;
  archer?: InputMaybe<ArcherWhere>;
  archerConnection?: InputMaybe<SetArcherConnectionWhere>;
  archerConnection_NOT?: InputMaybe<SetArcherConnectionWhere>;
  archer_NOT?: InputMaybe<ArcherWhere>;
  arrowsAggregate?: InputMaybe<SetArrowsAggregateInput>;
  /** Return Sets where all of the related SetArrowsConnections match this filter */
  arrowsConnection_ALL?: InputMaybe<SetArrowsConnectionWhere>;
  /** Return Sets where none of the related SetArrowsConnections match this filter */
  arrowsConnection_NONE?: InputMaybe<SetArrowsConnectionWhere>;
  /** Return Sets where one of the related SetArrowsConnections match this filter */
  arrowsConnection_SINGLE?: InputMaybe<SetArrowsConnectionWhere>;
  /** Return Sets where some of the related SetArrowsConnections match this filter */
  arrowsConnection_SOME?: InputMaybe<SetArrowsConnectionWhere>;
  arrowsInOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Return Sets where all of the related Arrows match this filter */
  arrows_ALL?: InputMaybe<ArrowWhere>;
  /** Return Sets where none of the related Arrows match this filter */
  arrows_NONE?: InputMaybe<ArrowWhere>;
  /** Return Sets where one of the related Arrows match this filter */
  arrows_SINGLE?: InputMaybe<ArrowWhere>;
  /** Return Sets where some of the related Arrows match this filter */
  arrows_SOME?: InputMaybe<ArrowWhere>;
  commentsAggregate?: InputMaybe<SetCommentsAggregateInput>;
  /** Return Sets where all of the related SetCommentsConnections match this filter */
  commentsConnection_ALL?: InputMaybe<SetCommentsConnectionWhere>;
  /** Return Sets where none of the related SetCommentsConnections match this filter */
  commentsConnection_NONE?: InputMaybe<SetCommentsConnectionWhere>;
  /** Return Sets where one of the related SetCommentsConnections match this filter */
  commentsConnection_SINGLE?: InputMaybe<SetCommentsConnectionWhere>;
  /** Return Sets where some of the related SetCommentsConnections match this filter */
  commentsConnection_SOME?: InputMaybe<SetCommentsConnectionWhere>;
  /** Return Sets where all of the related Comments match this filter */
  comments_ALL?: InputMaybe<CommentWhere>;
  /** Return Sets where none of the related Comments match this filter */
  comments_NONE?: InputMaybe<CommentWhere>;
  /** Return Sets where one of the related Comments match this filter */
  comments_SINGLE?: InputMaybe<CommentWhere>;
  /** Return Sets where some of the related Comments match this filter */
  comments_SOME?: InputMaybe<CommentWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  notesAggregate?: InputMaybe<SetNotesAggregateInput>;
  /** Return Sets where all of the related SetNotesConnections match this filter */
  notesConnection_ALL?: InputMaybe<SetNotesConnectionWhere>;
  /** Return Sets where none of the related SetNotesConnections match this filter */
  notesConnection_NONE?: InputMaybe<SetNotesConnectionWhere>;
  /** Return Sets where one of the related SetNotesConnections match this filter */
  notesConnection_SINGLE?: InputMaybe<SetNotesConnectionWhere>;
  /** Return Sets where some of the related SetNotesConnections match this filter */
  notesConnection_SOME?: InputMaybe<SetNotesConnectionWhere>;
  /** Return Sets where all of the related Notes match this filter */
  notes_ALL?: InputMaybe<NoteWhere>;
  /** Return Sets where none of the related Notes match this filter */
  notes_NONE?: InputMaybe<NoteWhere>;
  /** Return Sets where one of the related Notes match this filter */
  notes_SINGLE?: InputMaybe<NoteWhere>;
  /** Return Sets where some of the related Notes match this filter */
  notes_SOME?: InputMaybe<NoteWhere>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  session?: InputMaybe<SessionWhere>;
  sessionAggregate?: InputMaybe<SetSessionAggregateInput>;
  sessionConnection?: InputMaybe<SetSessionConnectionWhere>;
  sessionConnection_NOT?: InputMaybe<SetSessionConnectionWhere>;
  session_NOT?: InputMaybe<SessionWhere>;
  shootoff?: InputMaybe<Scalars["Boolean"]["input"]>;
  target?: InputMaybe<TargetWhere>;
  targetAggregate?: InputMaybe<SetTargetAggregateInput>;
  targetConnection?: InputMaybe<SetTargetConnectionWhere>;
  targetConnection_NOT?: InputMaybe<SetTargetConnectionWhere>;
  target_NOT?: InputMaybe<TargetWhere>;
};

export type SetsConnection = {
  __typename?: "SetsConnection";
  edges: Array<SetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  longest?: Maybe<Scalars["String"]["output"]>;
  shortest?: Maybe<Scalars["String"]["output"]>;
};

export type SyntheticSamplePropsInput = {
  config: TargetConfigInput;
  max: Scalars["Float"]["input"];
  mean: Scalars["Float"]["input"];
  min: Scalars["Float"]["input"];
  size: Scalars["Int"]["input"];
  std: Scalars["Float"]["input"];
};

export type SyntheticSampleResponse = {
  __typename?: "SyntheticSampleResponse";
  max: Scalars["Float"]["output"];
  mean: Scalars["Float"]["output"];
  message: Scalars["String"]["output"];
  min: Scalars["Float"]["output"];
  sample: Array<Scalars["Float"]["output"]>;
  std: Scalars["Float"]["output"];
};

export type SyntheticSampleResponseAggregateSelection = {
  __typename?: "SyntheticSampleResponseAggregateSelection";
  count: Scalars["Int"]["output"];
  max: FloatAggregateSelection;
  mean: FloatAggregateSelection;
  message: StringAggregateSelection;
  min: FloatAggregateSelection;
  std: FloatAggregateSelection;
};

export type SyntheticSampleResponseCreateInput = {
  max: Scalars["Float"]["input"];
  mean: Scalars["Float"]["input"];
  message: Scalars["String"]["input"];
  min: Scalars["Float"]["input"];
  sample: Array<Scalars["Float"]["input"]>;
  std: Scalars["Float"]["input"];
};

export type SyntheticSampleResponseEdge = {
  __typename?: "SyntheticSampleResponseEdge";
  cursor: Scalars["String"]["output"];
  node: SyntheticSampleResponse;
};

export type SyntheticSampleResponseOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SyntheticSampleResponseSort objects to sort SyntheticSampleResponses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SyntheticSampleResponseSort>>;
};

/** Fields to sort SyntheticSampleResponses by. The order in which sorts are applied is not guaranteed when specifying many fields in one SyntheticSampleResponseSort object. */
export type SyntheticSampleResponseSort = {
  max?: InputMaybe<SortDirection>;
  mean?: InputMaybe<SortDirection>;
  message?: InputMaybe<SortDirection>;
  min?: InputMaybe<SortDirection>;
  std?: InputMaybe<SortDirection>;
};

export type SyntheticSampleResponseUpdateInput = {
  max?: InputMaybe<Scalars["Float"]["input"]>;
  max_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  max_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  max_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  mean?: InputMaybe<Scalars["Float"]["input"]>;
  mean_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  mean_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  mean_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  min?: InputMaybe<Scalars["Float"]["input"]>;
  min_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  min_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  min_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  sample?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  sample_POP?: InputMaybe<Scalars["Int"]["input"]>;
  sample_PUSH?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  std?: InputMaybe<Scalars["Float"]["input"]>;
  std_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  std_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  std_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  std_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SyntheticSampleResponseWhere = {
  AND?: InputMaybe<Array<SyntheticSampleResponseWhere>>;
  NOT?: InputMaybe<SyntheticSampleResponseWhere>;
  OR?: InputMaybe<Array<SyntheticSampleResponseWhere>>;
  max?: InputMaybe<Scalars["Float"]["input"]>;
  max_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  max_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean?: InputMaybe<Scalars["Float"]["input"]>;
  mean_GT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  mean_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  mean_LT?: InputMaybe<Scalars["Float"]["input"]>;
  mean_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  message_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  message_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  message_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  message_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  min?: InputMaybe<Scalars["Float"]["input"]>;
  min_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  min_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  sample?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  sample_INCLUDES?: InputMaybe<Scalars["Float"]["input"]>;
  std?: InputMaybe<Scalars["Float"]["input"]>;
  std_GT?: InputMaybe<Scalars["Float"]["input"]>;
  std_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  std_IN?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  std_LT?: InputMaybe<Scalars["Float"]["input"]>;
  std_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SyntheticSampleResponsesConnection = {
  __typename?: "SyntheticSampleResponsesConnection";
  edges: Array<SyntheticSampleResponseEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type Target = {
  __typename?: "Target";
  arrows: Array<Arrow>;
  arrowsAggregate?: Maybe<TargetArrowArrowsAggregationSelection>;
  arrowsConnection: TargetArrowsConnection;
  id: Scalars["ID"]["output"];
  max: Scalars["Int"]["output"];
  min: Scalars["Int"]["output"];
  radius: Scalars["Int"]["output"];
  rings: Scalars["Int"]["output"];
  sets: Array<Set>;
  setsAggregate?: Maybe<TargetSetSetsAggregationSelection>;
  setsConnection: TargetSetsConnection;
  type: Scalars["String"]["output"];
  xRing: Scalars["Boolean"]["output"];
};

export type TargetArrowsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<ArrowOptions>;
  where?: InputMaybe<ArrowWhere>;
};

export type TargetArrowsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ArrowWhere>;
};

export type TargetArrowsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<TargetArrowsConnectionSort>>;
  where?: InputMaybe<TargetArrowsConnectionWhere>;
};

export type TargetSetsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};

export type TargetSetsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SetWhere>;
};

export type TargetSetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<TargetSetsConnectionSort>>;
  where?: InputMaybe<TargetSetsConnectionWhere>;
};

export type TargetAggregateSelection = {
  __typename?: "TargetAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  max: IntAggregateSelection;
  min: IntAggregateSelection;
  radius: IntAggregateSelection;
  rings: IntAggregateSelection;
  type: StringAggregateSelection;
};

export type TargetArrowArrowsAggregationSelection = {
  __typename?: "TargetArrowArrowsAggregationSelection";
  count: Scalars["Int"]["output"];
  edge?: Maybe<TargetArrowArrowsEdgeAggregateSelection>;
  node?: Maybe<TargetArrowArrowsNodeAggregateSelection>;
};

export type TargetArrowArrowsEdgeAggregateSelection = {
  __typename?: "TargetArrowArrowsEdgeAggregateSelection";
  distance: IntAggregateSelection;
};

export type TargetArrowArrowsNodeAggregateSelection = {
  __typename?: "TargetArrowArrowsNodeAggregateSelection";
  angle: FloatAggregateSelection;
  id: IdAggregateSelection;
  number: IntAggregateSelection;
  offset: FloatAggregateSelection;
  value: IntAggregateSelection;
};

export type TargetArrowsAggregateInput = {
  AND?: InputMaybe<Array<TargetArrowsAggregateInput>>;
  NOT?: InputMaybe<TargetArrowsAggregateInput>;
  OR?: InputMaybe<Array<TargetArrowsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  edge?: InputMaybe<AtTargetAggregationWhereInput>;
  node?: InputMaybe<TargetArrowsNodeAggregationWhereInput>;
};

export type TargetArrowsConnectFieldInput = {
  connect?: InputMaybe<Array<ArrowConnectInput>>;
  edge: AtTargetCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<ArrowConnectWhere>;
};

export type TargetArrowsConnection = {
  __typename?: "TargetArrowsConnection";
  edges: Array<TargetArrowsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type TargetArrowsConnectionSort = {
  edge?: InputMaybe<AtTargetSort>;
  node?: InputMaybe<ArrowSort>;
};

export type TargetArrowsConnectionWhere = {
  AND?: InputMaybe<Array<TargetArrowsConnectionWhere>>;
  NOT?: InputMaybe<TargetArrowsConnectionWhere>;
  OR?: InputMaybe<Array<TargetArrowsConnectionWhere>>;
  edge?: InputMaybe<AtTargetWhere>;
  node?: InputMaybe<ArrowWhere>;
};

export type TargetArrowsCreateFieldInput = {
  edge: AtTargetCreateInput;
  node: ArrowCreateInput;
};

export type TargetArrowsDeleteFieldInput = {
  delete?: InputMaybe<ArrowDeleteInput>;
  where?: InputMaybe<TargetArrowsConnectionWhere>;
};

export type TargetArrowsDisconnectFieldInput = {
  disconnect?: InputMaybe<ArrowDisconnectInput>;
  where?: InputMaybe<TargetArrowsConnectionWhere>;
};

export type TargetArrowsFieldInput = {
  connect?: InputMaybe<Array<TargetArrowsConnectFieldInput>>;
  create?: InputMaybe<Array<TargetArrowsCreateFieldInput>>;
};

export type TargetArrowsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TargetArrowsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TargetArrowsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TargetArrowsNodeAggregationWhereInput>>;
  angle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  offset_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TargetArrowsRelationship = {
  __typename?: "TargetArrowsRelationship";
  cursor: Scalars["String"]["output"];
  node: Arrow;
  properties: AtTarget;
};

export type TargetArrowsUpdateConnectionInput = {
  edge?: InputMaybe<AtTargetUpdateInput>;
  node?: InputMaybe<ArrowUpdateInput>;
};

export type TargetArrowsUpdateFieldInput = {
  connect?: InputMaybe<Array<TargetArrowsConnectFieldInput>>;
  create?: InputMaybe<Array<TargetArrowsCreateFieldInput>>;
  delete?: InputMaybe<Array<TargetArrowsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TargetArrowsDisconnectFieldInput>>;
  update?: InputMaybe<TargetArrowsUpdateConnectionInput>;
  where?: InputMaybe<TargetArrowsConnectionWhere>;
};

export type TargetConfigInput = {
  max: Scalars["Float"]["input"];
  min: Scalars["Float"]["input"];
};

export type TargetConnectInput = {
  arrows?: InputMaybe<Array<TargetArrowsConnectFieldInput>>;
  sets?: InputMaybe<Array<TargetSetsConnectFieldInput>>;
};

export type TargetConnectWhere = {
  node: TargetWhere;
};

export type TargetCreateInput = {
  arrows?: InputMaybe<TargetArrowsFieldInput>;
  max: Scalars["Int"]["input"];
  min: Scalars["Int"]["input"];
  radius: Scalars["Int"]["input"];
  rings: Scalars["Int"]["input"];
  sets?: InputMaybe<TargetSetsFieldInput>;
  type: Scalars["String"]["input"];
  xRing?: Scalars["Boolean"]["input"];
};

export type TargetDeleteInput = {
  arrows?: InputMaybe<Array<TargetArrowsDeleteFieldInput>>;
  sets?: InputMaybe<Array<TargetSetsDeleteFieldInput>>;
};

export type TargetDisconnectInput = {
  arrows?: InputMaybe<Array<TargetArrowsDisconnectFieldInput>>;
  sets?: InputMaybe<Array<TargetSetsDisconnectFieldInput>>;
};

export type TargetEdge = {
  __typename?: "TargetEdge";
  cursor: Scalars["String"]["output"];
  node: Target;
};

export type TargetOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more TargetSort objects to sort Targets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TargetSort>>;
};

export type TargetRelationInput = {
  arrows?: InputMaybe<Array<TargetArrowsCreateFieldInput>>;
  sets?: InputMaybe<Array<TargetSetsCreateFieldInput>>;
};

export type TargetSetSetsAggregationSelection = {
  __typename?: "TargetSetSetsAggregationSelection";
  count: Scalars["Int"]["output"];
  edge?: Maybe<TargetSetSetsEdgeAggregateSelection>;
  node?: Maybe<TargetSetSetsNodeAggregateSelection>;
};

export type TargetSetSetsEdgeAggregateSelection = {
  __typename?: "TargetSetSetsEdgeAggregateSelection";
  distance: IntAggregateSelection;
};

export type TargetSetSetsNodeAggregateSelection = {
  __typename?: "TargetSetSetsNodeAggregateSelection";
  id: IdAggregateSelection;
  number: IntAggregateSelection;
};

export type TargetSetsAggregateInput = {
  AND?: InputMaybe<Array<TargetSetsAggregateInput>>;
  NOT?: InputMaybe<TargetSetsAggregateInput>;
  OR?: InputMaybe<Array<TargetSetsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  edge?: InputMaybe<AtTargetAggregationWhereInput>;
  node?: InputMaybe<TargetSetsNodeAggregationWhereInput>;
};

export type TargetSetsConnectFieldInput = {
  connect?: InputMaybe<Array<SetConnectInput>>;
  edge: AtTargetCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SetConnectWhere>;
};

export type TargetSetsConnection = {
  __typename?: "TargetSetsConnection";
  edges: Array<TargetSetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type TargetSetsConnectionSort = {
  edge?: InputMaybe<AtTargetSort>;
  node?: InputMaybe<SetSort>;
};

export type TargetSetsConnectionWhere = {
  AND?: InputMaybe<Array<TargetSetsConnectionWhere>>;
  NOT?: InputMaybe<TargetSetsConnectionWhere>;
  OR?: InputMaybe<Array<TargetSetsConnectionWhere>>;
  edge?: InputMaybe<AtTargetWhere>;
  node?: InputMaybe<SetWhere>;
};

export type TargetSetsCreateFieldInput = {
  edge: AtTargetCreateInput;
  node: SetCreateInput;
};

export type TargetSetsDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<TargetSetsConnectionWhere>;
};

export type TargetSetsDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<TargetSetsConnectionWhere>;
};

export type TargetSetsFieldInput = {
  connect?: InputMaybe<Array<TargetSetsConnectFieldInput>>;
  create?: InputMaybe<Array<TargetSetsCreateFieldInput>>;
};

export type TargetSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TargetSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TargetSetsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TargetSetsNodeAggregationWhereInput>>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TargetSetsRelationship = {
  __typename?: "TargetSetsRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
  properties: AtTarget;
};

export type TargetSetsUpdateConnectionInput = {
  edge?: InputMaybe<AtTargetUpdateInput>;
  node?: InputMaybe<SetUpdateInput>;
};

export type TargetSetsUpdateFieldInput = {
  connect?: InputMaybe<Array<TargetSetsConnectFieldInput>>;
  create?: InputMaybe<Array<TargetSetsCreateFieldInput>>;
  delete?: InputMaybe<Array<TargetSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TargetSetsDisconnectFieldInput>>;
  update?: InputMaybe<TargetSetsUpdateConnectionInput>;
  where?: InputMaybe<TargetSetsConnectionWhere>;
};

/** Fields to sort Targets by. The order in which sorts are applied is not guaranteed when specifying many fields in one TargetSort object. */
export type TargetSort = {
  id?: InputMaybe<SortDirection>;
  max?: InputMaybe<SortDirection>;
  min?: InputMaybe<SortDirection>;
  radius?: InputMaybe<SortDirection>;
  rings?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  xRing?: InputMaybe<SortDirection>;
};

export type TargetUpdateInput = {
  arrows?: InputMaybe<Array<TargetArrowsUpdateFieldInput>>;
  max?: InputMaybe<Scalars["Int"]["input"]>;
  max_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  max_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  min?: InputMaybe<Scalars["Int"]["input"]>;
  min_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  min_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  radius?: InputMaybe<Scalars["Int"]["input"]>;
  radius_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  rings?: InputMaybe<Scalars["Int"]["input"]>;
  rings_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  sets?: InputMaybe<Array<TargetSetsUpdateFieldInput>>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  xRing?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TargetWhere = {
  AND?: InputMaybe<Array<TargetWhere>>;
  NOT?: InputMaybe<TargetWhere>;
  OR?: InputMaybe<Array<TargetWhere>>;
  arrowsAggregate?: InputMaybe<TargetArrowsAggregateInput>;
  /** Return Targets where all of the related TargetArrowsConnections match this filter */
  arrowsConnection_ALL?: InputMaybe<TargetArrowsConnectionWhere>;
  /** Return Targets where none of the related TargetArrowsConnections match this filter */
  arrowsConnection_NONE?: InputMaybe<TargetArrowsConnectionWhere>;
  /** Return Targets where one of the related TargetArrowsConnections match this filter */
  arrowsConnection_SINGLE?: InputMaybe<TargetArrowsConnectionWhere>;
  /** Return Targets where some of the related TargetArrowsConnections match this filter */
  arrowsConnection_SOME?: InputMaybe<TargetArrowsConnectionWhere>;
  /** Return Targets where all of the related Arrows match this filter */
  arrows_ALL?: InputMaybe<ArrowWhere>;
  /** Return Targets where none of the related Arrows match this filter */
  arrows_NONE?: InputMaybe<ArrowWhere>;
  /** Return Targets where one of the related Arrows match this filter */
  arrows_SINGLE?: InputMaybe<ArrowWhere>;
  /** Return Targets where some of the related Arrows match this filter */
  arrows_SOME?: InputMaybe<ArrowWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  max?: InputMaybe<Scalars["Int"]["input"]>;
  max_GT?: InputMaybe<Scalars["Int"]["input"]>;
  max_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  max_LT?: InputMaybe<Scalars["Int"]["input"]>;
  max_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  min?: InputMaybe<Scalars["Int"]["input"]>;
  min_GT?: InputMaybe<Scalars["Int"]["input"]>;
  min_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  min_LT?: InputMaybe<Scalars["Int"]["input"]>;
  min_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius?: InputMaybe<Scalars["Int"]["input"]>;
  radius_GT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  radius_LT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings?: InputMaybe<Scalars["Int"]["input"]>;
  rings_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  rings_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  setsAggregate?: InputMaybe<TargetSetsAggregateInput>;
  /** Return Targets where all of the related TargetSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<TargetSetsConnectionWhere>;
  /** Return Targets where none of the related TargetSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<TargetSetsConnectionWhere>;
  /** Return Targets where one of the related TargetSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<TargetSetsConnectionWhere>;
  /** Return Targets where some of the related TargetSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<TargetSetsConnectionWhere>;
  /** Return Targets where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Targets where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Targets where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Targets where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  type_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  type_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  type_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  type_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  xRing?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TargetsConnection = {
  __typename?: "TargetsConnection";
  edges: Array<TargetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export enum TimerMode {
  Loop = "LOOP",
  Total = "TOTAL",
}

export type UpdateArrowsMutationResponse = {
  __typename?: "UpdateArrowsMutationResponse";
  arrows: Array<Arrow>;
  info: UpdateInfo;
};

export type UpdateAuthenticatorsMutationResponse = {
  __typename?: "UpdateAuthenticatorsMutationResponse";
  authenticators: Array<Authenticator>;
  info: UpdateInfo;
};

export type UpdateBowsMutationResponse = {
  __typename?: "UpdateBowsMutationResponse";
  bows: Array<Bow>;
  info: UpdateInfo;
};

export type UpdateCommentsMutationResponse = {
  __typename?: "UpdateCommentsMutationResponse";
  comments: Array<Comment>;
  info: UpdateInfo;
};

export type UpdateEnemiesMutationResponse = {
  __typename?: "UpdateEnemiesMutationResponse";
  enemies: Array<Enemy>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateLocationsMutationResponse = {
  __typename?: "UpdateLocationsMutationResponse";
  info: UpdateInfo;
  locations: Array<Location>;
};

export type UpdateNotesMutationResponse = {
  __typename?: "UpdateNotesMutationResponse";
  info: UpdateInfo;
  notes: Array<Note>;
};

export type UpdateRulesetsMutationResponse = {
  __typename?: "UpdateRulesetsMutationResponse";
  info: UpdateInfo;
  rulesets: Array<Ruleset>;
};

export type UpdateSessionsMutationResponse = {
  __typename?: "UpdateSessionsMutationResponse";
  info: UpdateInfo;
  sessions: Array<Session>;
};

export type UpdateSetsMutationResponse = {
  __typename?: "UpdateSetsMutationResponse";
  info: UpdateInfo;
  sets: Array<Set>;
};

export type UpdateSyntheticSampleResponsesMutationResponse = {
  __typename?: "UpdateSyntheticSampleResponsesMutationResponse";
  info: UpdateInfo;
  syntheticSampleResponses: Array<SyntheticSampleResponse>;
};

export type UpdateTargetsMutationResponse = {
  __typename?: "UpdateTargetsMutationResponse";
  info: UpdateInfo;
  targets: Array<Target>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  arrows: Array<Arrow>;
  arrowsAggregate?: Maybe<UserArrowArrowsAggregationSelection>;
  arrowsConnection: UserArrowsConnection;
  authId: Scalars["String"]["output"];
  authenticator: Authenticator;
  authenticatorAggregate?: Maybe<UserAuthenticatorAuthenticatorAggregationSelection>;
  authenticatorConnection: UserAuthenticatorConnection;
  bows: Array<Bow>;
  bowsAggregate?: Maybe<UserBowBowsAggregationSelection>;
  bowsConnection: UserBowsConnection;
  id: Scalars["ID"]["output"];
  sessions: Array<Session>;
  sessionsAggregate?: Maybe<UserSessionSessionsAggregationSelection>;
  sessionsConnection: UserSessionsConnection;
  sets: Array<Set>;
  setsAggregate?: Maybe<UserSetSetsAggregationSelection>;
  setsConnection: UserSetsConnection;
};

export type UserArrowsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<ArrowOptions>;
  where?: InputMaybe<ArrowWhere>;
};

export type UserArrowsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ArrowWhere>;
};

export type UserArrowsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<UserArrowsConnectionSort>>;
  where?: InputMaybe<UserArrowsConnectionWhere>;
};

export type UserAuthenticatorAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AuthenticatorWhere>;
};

export type UserAuthenticatorConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<UserAuthenticatorConnectionSort>>;
  where?: InputMaybe<UserAuthenticatorConnectionWhere>;
};

export type UserBowsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<BowOptions>;
  where?: InputMaybe<BowWhere>;
};

export type UserBowsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<BowWhere>;
};

export type UserBowsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<UserBowsConnectionSort>>;
  where?: InputMaybe<UserBowsConnectionWhere>;
};

export type UserSessionsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SessionOptions>;
  where?: InputMaybe<SessionWhere>;
};

export type UserSessionsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SessionWhere>;
};

export type UserSessionsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<UserSessionsConnectionSort>>;
  where?: InputMaybe<UserSessionsConnectionWhere>;
};

export type UserSetsArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  options?: InputMaybe<SetOptions>;
  where?: InputMaybe<SetWhere>;
};

export type UserSetsAggregateArgs = {
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<SetWhere>;
};

export type UserSetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<Array<UserSetsConnectionSort>>;
  where?: InputMaybe<UserSetsConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  authId: StringAggregateSelection;
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
};

export type UserArrowArrowsAggregationSelection = {
  __typename?: "UserArrowArrowsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserArrowArrowsNodeAggregateSelection>;
};

export type UserArrowArrowsNodeAggregateSelection = {
  __typename?: "UserArrowArrowsNodeAggregateSelection";
  angle: FloatAggregateSelection;
  id: IdAggregateSelection;
  number: IntAggregateSelection;
  offset: FloatAggregateSelection;
  value: IntAggregateSelection;
};

export type UserArrowsAggregateInput = {
  AND?: InputMaybe<Array<UserArrowsAggregateInput>>;
  NOT?: InputMaybe<UserArrowsAggregateInput>;
  OR?: InputMaybe<Array<UserArrowsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<UserArrowsNodeAggregationWhereInput>;
};

export type UserArrowsConnectFieldInput = {
  connect?: InputMaybe<Array<ArrowConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<ArrowConnectWhere>;
};

export type UserArrowsConnection = {
  __typename?: "UserArrowsConnection";
  edges: Array<UserArrowsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type UserArrowsConnectionSort = {
  node?: InputMaybe<ArrowSort>;
};

export type UserArrowsConnectionWhere = {
  AND?: InputMaybe<Array<UserArrowsConnectionWhere>>;
  NOT?: InputMaybe<UserArrowsConnectionWhere>;
  OR?: InputMaybe<Array<UserArrowsConnectionWhere>>;
  node?: InputMaybe<ArrowWhere>;
};

export type UserArrowsCreateFieldInput = {
  node: ArrowCreateInput;
};

export type UserArrowsDeleteFieldInput = {
  delete?: InputMaybe<ArrowDeleteInput>;
  where?: InputMaybe<UserArrowsConnectionWhere>;
};

export type UserArrowsDisconnectFieldInput = {
  disconnect?: InputMaybe<ArrowDisconnectInput>;
  where?: InputMaybe<UserArrowsConnectionWhere>;
};

export type UserArrowsFieldInput = {
  connect?: InputMaybe<Array<UserArrowsConnectFieldInput>>;
  create?: InputMaybe<Array<UserArrowsCreateFieldInput>>;
};

export type UserArrowsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserArrowsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserArrowsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserArrowsNodeAggregationWhereInput>>;
  angle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  offset_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  value_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserArrowsRelationship = {
  __typename?: "UserArrowsRelationship";
  cursor: Scalars["String"]["output"];
  node: Arrow;
};

export type UserArrowsUpdateConnectionInput = {
  node?: InputMaybe<ArrowUpdateInput>;
};

export type UserArrowsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserArrowsConnectFieldInput>>;
  create?: InputMaybe<Array<UserArrowsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserArrowsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserArrowsDisconnectFieldInput>>;
  update?: InputMaybe<UserArrowsUpdateConnectionInput>;
  where?: InputMaybe<UserArrowsConnectionWhere>;
};

export type UserAuthenticatorAggregateInput = {
  AND?: InputMaybe<Array<UserAuthenticatorAggregateInput>>;
  NOT?: InputMaybe<UserAuthenticatorAggregateInput>;
  OR?: InputMaybe<Array<UserAuthenticatorAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  edge?: InputMaybe<AuthenticatesAggregationWhereInput>;
  node?: InputMaybe<UserAuthenticatorNodeAggregationWhereInput>;
};

export type UserAuthenticatorAuthenticatorAggregationSelection = {
  __typename?: "UserAuthenticatorAuthenticatorAggregationSelection";
  count: Scalars["Int"]["output"];
  edge?: Maybe<UserAuthenticatorAuthenticatorEdgeAggregateSelection>;
  node?: Maybe<UserAuthenticatorAuthenticatorNodeAggregateSelection>;
};

export type UserAuthenticatorAuthenticatorEdgeAggregateSelection = {
  __typename?: "UserAuthenticatorAuthenticatorEdgeAggregateSelection";
  id: StringAggregateSelection;
};

export type UserAuthenticatorAuthenticatorNodeAggregateSelection = {
  __typename?: "UserAuthenticatorAuthenticatorNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type UserAuthenticatorConnectFieldInput = {
  connect?: InputMaybe<AuthenticatorConnectInput>;
  edge: AuthenticatesCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<AuthenticatorConnectWhere>;
};

export type UserAuthenticatorConnectOrCreateFieldInput = {
  onCreate: UserAuthenticatorConnectOrCreateFieldInputOnCreate;
  where: AuthenticatorConnectOrCreateWhere;
};

export type UserAuthenticatorConnectOrCreateFieldInputOnCreate = {
  edge: AuthenticatesCreateInput;
  node: AuthenticatorOnCreateInput;
};

export type UserAuthenticatorConnection = {
  __typename?: "UserAuthenticatorConnection";
  edges: Array<UserAuthenticatorRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type UserAuthenticatorConnectionSort = {
  edge?: InputMaybe<AuthenticatesSort>;
  node?: InputMaybe<AuthenticatorSort>;
};

export type UserAuthenticatorConnectionWhere = {
  AND?: InputMaybe<Array<UserAuthenticatorConnectionWhere>>;
  NOT?: InputMaybe<UserAuthenticatorConnectionWhere>;
  OR?: InputMaybe<Array<UserAuthenticatorConnectionWhere>>;
  edge?: InputMaybe<AuthenticatesWhere>;
  node?: InputMaybe<AuthenticatorWhere>;
};

export type UserAuthenticatorCreateFieldInput = {
  edge: AuthenticatesCreateInput;
  node: AuthenticatorCreateInput;
};

export type UserAuthenticatorDeleteFieldInput = {
  delete?: InputMaybe<AuthenticatorDeleteInput>;
  where?: InputMaybe<UserAuthenticatorConnectionWhere>;
};

export type UserAuthenticatorDisconnectFieldInput = {
  disconnect?: InputMaybe<AuthenticatorDisconnectInput>;
  where?: InputMaybe<UserAuthenticatorConnectionWhere>;
};

export type UserAuthenticatorFieldInput = {
  connect?: InputMaybe<UserAuthenticatorConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserAuthenticatorConnectOrCreateFieldInput>;
  create?: InputMaybe<UserAuthenticatorCreateFieldInput>;
};

export type UserAuthenticatorNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserAuthenticatorNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserAuthenticatorNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserAuthenticatorNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserAuthenticatorRelationship = {
  __typename?: "UserAuthenticatorRelationship";
  cursor: Scalars["String"]["output"];
  node: Authenticator;
  properties: Authenticates;
};

export type UserAuthenticatorUpdateConnectionInput = {
  edge?: InputMaybe<AuthenticatesUpdateInput>;
  node?: InputMaybe<AuthenticatorUpdateInput>;
};

export type UserAuthenticatorUpdateFieldInput = {
  connect?: InputMaybe<UserAuthenticatorConnectFieldInput>;
  connectOrCreate?: InputMaybe<UserAuthenticatorConnectOrCreateFieldInput>;
  create?: InputMaybe<UserAuthenticatorCreateFieldInput>;
  delete?: InputMaybe<UserAuthenticatorDeleteFieldInput>;
  disconnect?: InputMaybe<UserAuthenticatorDisconnectFieldInput>;
  update?: InputMaybe<UserAuthenticatorUpdateConnectionInput>;
  where?: InputMaybe<UserAuthenticatorConnectionWhere>;
};

export type UserBowBowsAggregationSelection = {
  __typename?: "UserBowBowsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserBowBowsNodeAggregateSelection>;
};

export type UserBowBowsNodeAggregateSelection = {
  __typename?: "UserBowBowsNodeAggregateSelection";
  brand: StringAggregateSelection;
  id: IdAggregateSelection;
  model: StringAggregateSelection;
};

export type UserBowsAggregateInput = {
  AND?: InputMaybe<Array<UserBowsAggregateInput>>;
  NOT?: InputMaybe<UserBowsAggregateInput>;
  OR?: InputMaybe<Array<UserBowsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<UserBowsNodeAggregationWhereInput>;
};

export type UserBowsConnectFieldInput = {
  connect?: InputMaybe<Array<BowConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<BowConnectWhere>;
};

export type UserBowsConnection = {
  __typename?: "UserBowsConnection";
  edges: Array<UserBowsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type UserBowsConnectionSort = {
  node?: InputMaybe<BowSort>;
};

export type UserBowsConnectionWhere = {
  AND?: InputMaybe<Array<UserBowsConnectionWhere>>;
  NOT?: InputMaybe<UserBowsConnectionWhere>;
  OR?: InputMaybe<Array<UserBowsConnectionWhere>>;
  node?: InputMaybe<BowWhere>;
};

export type UserBowsCreateFieldInput = {
  node: BowCreateInput;
};

export type UserBowsDeleteFieldInput = {
  delete?: InputMaybe<BowDeleteInput>;
  where?: InputMaybe<UserBowsConnectionWhere>;
};

export type UserBowsDisconnectFieldInput = {
  disconnect?: InputMaybe<BowDisconnectInput>;
  where?: InputMaybe<UserBowsConnectionWhere>;
};

export type UserBowsFieldInput = {
  connect?: InputMaybe<Array<UserBowsConnectFieldInput>>;
  create?: InputMaybe<Array<UserBowsCreateFieldInput>>;
};

export type UserBowsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserBowsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserBowsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserBowsNodeAggregationWhereInput>>;
  brand_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  brand_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  brand_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  brand_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  model_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  model_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  model_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  model_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserBowsRelationship = {
  __typename?: "UserBowsRelationship";
  cursor: Scalars["String"]["output"];
  node: Bow;
};

export type UserBowsUpdateConnectionInput = {
  node?: InputMaybe<BowUpdateInput>;
};

export type UserBowsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserBowsConnectFieldInput>>;
  create?: InputMaybe<Array<UserBowsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserBowsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserBowsDisconnectFieldInput>>;
  update?: InputMaybe<UserBowsUpdateConnectionInput>;
  where?: InputMaybe<UserBowsConnectionWhere>;
};

export type UserConnectInput = {
  arrows?: InputMaybe<Array<UserArrowsConnectFieldInput>>;
  authenticator?: InputMaybe<UserAuthenticatorConnectFieldInput>;
  bows?: InputMaybe<Array<UserBowsConnectFieldInput>>;
  sessions?: InputMaybe<Array<UserSessionsConnectFieldInput>>;
  sets?: InputMaybe<Array<UserSetsConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  authenticator?: InputMaybe<UserAuthenticatorConnectOrCreateFieldInput>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  arrows?: InputMaybe<UserArrowsFieldInput>;
  authId: Scalars["String"]["input"];
  authenticator?: InputMaybe<UserAuthenticatorFieldInput>;
  bows?: InputMaybe<UserBowsFieldInput>;
  sessions?: InputMaybe<UserSessionsFieldInput>;
  sets?: InputMaybe<UserSetsFieldInput>;
};

export type UserDeleteInput = {
  arrows?: InputMaybe<Array<UserArrowsDeleteFieldInput>>;
  authenticator?: InputMaybe<UserAuthenticatorDeleteFieldInput>;
  bows?: InputMaybe<Array<UserBowsDeleteFieldInput>>;
  sessions?: InputMaybe<Array<UserSessionsDeleteFieldInput>>;
  sets?: InputMaybe<Array<UserSetsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  arrows?: InputMaybe<Array<UserArrowsDisconnectFieldInput>>;
  authenticator?: InputMaybe<UserAuthenticatorDisconnectFieldInput>;
  bows?: InputMaybe<Array<UserBowsDisconnectFieldInput>>;
  sessions?: InputMaybe<Array<UserSessionsDisconnectFieldInput>>;
  sets?: InputMaybe<Array<UserSetsDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UserOnCreateInput = {
  authId: Scalars["String"]["input"];
};

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRelationInput = {
  arrows?: InputMaybe<Array<UserArrowsCreateFieldInput>>;
  authenticator?: InputMaybe<UserAuthenticatorCreateFieldInput>;
  bows?: InputMaybe<Array<UserBowsCreateFieldInput>>;
  sessions?: InputMaybe<Array<UserSessionsCreateFieldInput>>;
  sets?: InputMaybe<Array<UserSetsCreateFieldInput>>;
};

export type UserSessionSessionsAggregationSelection = {
  __typename?: "UserSessionSessionsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserSessionSessionsNodeAggregateSelection>;
};

export type UserSessionSessionsNodeAggregateSelection = {
  __typename?: "UserSessionSessionsNodeAggregateSelection";
  date: IntAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type UserSessionsAggregateInput = {
  AND?: InputMaybe<Array<UserSessionsAggregateInput>>;
  NOT?: InputMaybe<UserSessionsAggregateInput>;
  OR?: InputMaybe<Array<UserSessionsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<UserSessionsNodeAggregationWhereInput>;
};

export type UserSessionsConnectFieldInput = {
  connect?: InputMaybe<Array<SessionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SessionConnectWhere>;
};

export type UserSessionsConnection = {
  __typename?: "UserSessionsConnection";
  edges: Array<UserSessionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type UserSessionsConnectionSort = {
  node?: InputMaybe<SessionSort>;
};

export type UserSessionsConnectionWhere = {
  AND?: InputMaybe<Array<UserSessionsConnectionWhere>>;
  NOT?: InputMaybe<UserSessionsConnectionWhere>;
  OR?: InputMaybe<Array<UserSessionsConnectionWhere>>;
  node?: InputMaybe<SessionWhere>;
};

export type UserSessionsCreateFieldInput = {
  node: SessionCreateInput;
};

export type UserSessionsDeleteFieldInput = {
  delete?: InputMaybe<SessionDeleteInput>;
  where?: InputMaybe<UserSessionsConnectionWhere>;
};

export type UserSessionsDisconnectFieldInput = {
  disconnect?: InputMaybe<SessionDisconnectInput>;
  where?: InputMaybe<UserSessionsConnectionWhere>;
};

export type UserSessionsFieldInput = {
  connect?: InputMaybe<Array<UserSessionsConnectFieldInput>>;
  create?: InputMaybe<Array<UserSessionsCreateFieldInput>>;
};

export type UserSessionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserSessionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserSessionsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserSessionsNodeAggregationWhereInput>>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  date_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  date_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  date_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserSessionsRelationship = {
  __typename?: "UserSessionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Session;
};

export type UserSessionsUpdateConnectionInput = {
  node?: InputMaybe<SessionUpdateInput>;
};

export type UserSessionsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserSessionsConnectFieldInput>>;
  create?: InputMaybe<Array<UserSessionsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserSessionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserSessionsDisconnectFieldInput>>;
  update?: InputMaybe<UserSessionsUpdateConnectionInput>;
  where?: InputMaybe<UserSessionsConnectionWhere>;
};

export type UserSetSetsAggregationSelection = {
  __typename?: "UserSetSetsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserSetSetsNodeAggregateSelection>;
};

export type UserSetSetsNodeAggregateSelection = {
  __typename?: "UserSetSetsNodeAggregateSelection";
  id: IdAggregateSelection;
  number: IntAggregateSelection;
};

export type UserSetsAggregateInput = {
  AND?: InputMaybe<Array<UserSetsAggregateInput>>;
  NOT?: InputMaybe<UserSetsAggregateInput>;
  OR?: InputMaybe<Array<UserSetsAggregateInput>>;
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  node?: InputMaybe<UserSetsNodeAggregationWhereInput>;
};

export type UserSetsConnectFieldInput = {
  connect?: InputMaybe<Array<SetConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  where?: InputMaybe<SetConnectWhere>;
};

export type UserSetsConnection = {
  __typename?: "UserSetsConnection";
  edges: Array<UserSetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type UserSetsConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type UserSetsConnectionWhere = {
  AND?: InputMaybe<Array<UserSetsConnectionWhere>>;
  NOT?: InputMaybe<UserSetsConnectionWhere>;
  OR?: InputMaybe<Array<UserSetsConnectionWhere>>;
  node?: InputMaybe<SetWhere>;
};

export type UserSetsCreateFieldInput = {
  node: SetCreateInput;
};

export type UserSetsDeleteFieldInput = {
  delete?: InputMaybe<SetDeleteInput>;
  where?: InputMaybe<UserSetsConnectionWhere>;
};

export type UserSetsDisconnectFieldInput = {
  disconnect?: InputMaybe<SetDisconnectInput>;
  where?: InputMaybe<UserSetsConnectionWhere>;
};

export type UserSetsFieldInput = {
  connect?: InputMaybe<Array<UserSetsConnectFieldInput>>;
  create?: InputMaybe<Array<UserSetsCreateFieldInput>>;
};

export type UserSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserSetsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserSetsNodeAggregationWhereInput>>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserSetsRelationship = {
  __typename?: "UserSetsRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
};

export type UserSetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type UserSetsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserSetsConnectFieldInput>>;
  create?: InputMaybe<Array<UserSetsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserSetsDisconnectFieldInput>>;
  update?: InputMaybe<UserSetsUpdateConnectionInput>;
  where?: InputMaybe<UserSetsConnectionWhere>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  authId?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  authId?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdateInput = {
  arrows?: InputMaybe<Array<UserArrowsUpdateFieldInput>>;
  authId?: InputMaybe<Scalars["String"]["input"]>;
  authenticator?: InputMaybe<UserAuthenticatorUpdateFieldInput>;
  bows?: InputMaybe<Array<UserBowsUpdateFieldInput>>;
  sessions?: InputMaybe<Array<UserSessionsUpdateFieldInput>>;
  sets?: InputMaybe<Array<UserSetsUpdateFieldInput>>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  arrowsAggregate?: InputMaybe<UserArrowsAggregateInput>;
  /** Return Users where all of the related UserArrowsConnections match this filter */
  arrowsConnection_ALL?: InputMaybe<UserArrowsConnectionWhere>;
  /** Return Users where none of the related UserArrowsConnections match this filter */
  arrowsConnection_NONE?: InputMaybe<UserArrowsConnectionWhere>;
  /** Return Users where one of the related UserArrowsConnections match this filter */
  arrowsConnection_SINGLE?: InputMaybe<UserArrowsConnectionWhere>;
  /** Return Users where some of the related UserArrowsConnections match this filter */
  arrowsConnection_SOME?: InputMaybe<UserArrowsConnectionWhere>;
  /** Return Users where all of the related Arrows match this filter */
  arrows_ALL?: InputMaybe<ArrowWhere>;
  /** Return Users where none of the related Arrows match this filter */
  arrows_NONE?: InputMaybe<ArrowWhere>;
  /** Return Users where one of the related Arrows match this filter */
  arrows_SINGLE?: InputMaybe<ArrowWhere>;
  /** Return Users where some of the related Arrows match this filter */
  arrows_SOME?: InputMaybe<ArrowWhere>;
  authId?: InputMaybe<Scalars["String"]["input"]>;
  authId_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  authId_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  authId_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  authId_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  authenticator?: InputMaybe<AuthenticatorWhere>;
  authenticatorAggregate?: InputMaybe<UserAuthenticatorAggregateInput>;
  authenticatorConnection?: InputMaybe<UserAuthenticatorConnectionWhere>;
  authenticatorConnection_NOT?: InputMaybe<UserAuthenticatorConnectionWhere>;
  authenticator_NOT?: InputMaybe<AuthenticatorWhere>;
  bowsAggregate?: InputMaybe<UserBowsAggregateInput>;
  /** Return Users where all of the related UserBowsConnections match this filter */
  bowsConnection_ALL?: InputMaybe<UserBowsConnectionWhere>;
  /** Return Users where none of the related UserBowsConnections match this filter */
  bowsConnection_NONE?: InputMaybe<UserBowsConnectionWhere>;
  /** Return Users where one of the related UserBowsConnections match this filter */
  bowsConnection_SINGLE?: InputMaybe<UserBowsConnectionWhere>;
  /** Return Users where some of the related UserBowsConnections match this filter */
  bowsConnection_SOME?: InputMaybe<UserBowsConnectionWhere>;
  /** Return Users where all of the related Bows match this filter */
  bows_ALL?: InputMaybe<BowWhere>;
  /** Return Users where none of the related Bows match this filter */
  bows_NONE?: InputMaybe<BowWhere>;
  /** Return Users where one of the related Bows match this filter */
  bows_SINGLE?: InputMaybe<BowWhere>;
  /** Return Users where some of the related Bows match this filter */
  bows_SOME?: InputMaybe<BowWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  sessionsAggregate?: InputMaybe<UserSessionsAggregateInput>;
  /** Return Users where all of the related UserSessionsConnections match this filter */
  sessionsConnection_ALL?: InputMaybe<UserSessionsConnectionWhere>;
  /** Return Users where none of the related UserSessionsConnections match this filter */
  sessionsConnection_NONE?: InputMaybe<UserSessionsConnectionWhere>;
  /** Return Users where one of the related UserSessionsConnections match this filter */
  sessionsConnection_SINGLE?: InputMaybe<UserSessionsConnectionWhere>;
  /** Return Users where some of the related UserSessionsConnections match this filter */
  sessionsConnection_SOME?: InputMaybe<UserSessionsConnectionWhere>;
  /** Return Users where all of the related Sessions match this filter */
  sessions_ALL?: InputMaybe<SessionWhere>;
  /** Return Users where none of the related Sessions match this filter */
  sessions_NONE?: InputMaybe<SessionWhere>;
  /** Return Users where one of the related Sessions match this filter */
  sessions_SINGLE?: InputMaybe<SessionWhere>;
  /** Return Users where some of the related Sessions match this filter */
  sessions_SOME?: InputMaybe<SessionWhere>;
  setsAggregate?: InputMaybe<UserSetsAggregateInput>;
  /** Return Users where all of the related UserSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<UserSetsConnectionWhere>;
  /** Return Users where none of the related UserSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<UserSetsConnectionWhere>;
  /** Return Users where one of the related UserSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<UserSetsConnectionWhere>;
  /** Return Users where some of the related UserSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<UserSetsConnectionWhere>;
  /** Return Users where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Users where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Users where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Users where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type _Service = {
  __typename?: "_Service";
  sdl?: Maybe<Scalars["String"]["output"]>;
};

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = "EXECUTION",
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = "SECURITY",
}
