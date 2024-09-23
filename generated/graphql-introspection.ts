import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ArrowKeySpecifier = ('angle' | 'archer' | 'archerConnection' | 'comments' | 'commentsAggregate' | 'commentsConnection' | 'coordinate' | 'id' | 'notes' | 'notesAggregate' | 'notesConnection' | 'number' | 'offset' | 'set' | 'setAggregate' | 'setConnection' | 'value' | ArrowKeySpecifier)[];
export type ArrowFieldPolicy = {
	angle?: FieldPolicy<any> | FieldReadFunction<any>,
	archer?: FieldPolicy<any> | FieldReadFunction<any>,
	archerConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	coordinate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	notesAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	notesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	set?: FieldPolicy<any> | FieldReadFunction<any>,
	setAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	setConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowAggregateSelectionKeySpecifier = ('angle' | 'count' | 'id' | 'number' | 'offset' | 'value' | ArrowAggregateSelectionKeySpecifier)[];
export type ArrowAggregateSelectionFieldPolicy = {
	angle?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowArcherConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | ArrowArcherConnectionKeySpecifier)[];
export type ArrowArcherConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowArcherRelationshipKeySpecifier = ('cursor' | 'node' | ArrowArcherRelationshipKeySpecifier)[];
export type ArrowArcherRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowCommentCommentsAggregationSelectionKeySpecifier = ('count' | 'node' | ArrowCommentCommentsAggregationSelectionKeySpecifier)[];
export type ArrowCommentCommentsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowCommentCommentsNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | ArrowCommentCommentsNodeAggregateSelectionKeySpecifier)[];
export type ArrowCommentCommentsNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowCommentsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | ArrowCommentsConnectionKeySpecifier)[];
export type ArrowCommentsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowCommentsRelationshipKeySpecifier = ('cursor' | 'node' | ArrowCommentsRelationshipKeySpecifier)[];
export type ArrowCommentsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowEdgeKeySpecifier = ('cursor' | 'node' | ArrowEdgeKeySpecifier)[];
export type ArrowEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowNoteNotesAggregationSelectionKeySpecifier = ('count' | 'node' | ArrowNoteNotesAggregationSelectionKeySpecifier)[];
export type ArrowNoteNotesAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowNoteNotesNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | ArrowNoteNotesNodeAggregateSelectionKeySpecifier)[];
export type ArrowNoteNotesNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowNotesConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | ArrowNotesConnectionKeySpecifier)[];
export type ArrowNotesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowNotesRelationshipKeySpecifier = ('cursor' | 'node' | ArrowNotesRelationshipKeySpecifier)[];
export type ArrowNotesRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowSetConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | ArrowSetConnectionKeySpecifier)[];
export type ArrowSetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowSetRelationshipKeySpecifier = ('cursor' | 'node' | ArrowSetRelationshipKeySpecifier)[];
export type ArrowSetRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowSetSetAggregationSelectionKeySpecifier = ('count' | 'node' | ArrowSetSetAggregationSelectionKeySpecifier)[];
export type ArrowSetSetAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowSetSetNodeAggregateSelectionKeySpecifier = ('id' | 'number' | ArrowSetSetNodeAggregateSelectionKeySpecifier)[];
export type ArrowSetSetNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArrowsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | ArrowsConnectionKeySpecifier)[];
export type ArrowsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AtTargetKeySpecifier = ('distance' | AtTargetKeySpecifier)[];
export type AtTargetFieldPolicy = {
	distance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatesKeySpecifier = ('id' | AuthenticatesKeySpecifier)[];
export type AuthenticatesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatorKeySpecifier = ('id' | 'name' | 'users' | 'usersAggregate' | 'usersConnection' | AuthenticatorKeySpecifier)[];
export type AuthenticatorFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	usersConnection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatorAggregateSelectionKeySpecifier = ('count' | 'id' | 'name' | AuthenticatorAggregateSelectionKeySpecifier)[];
export type AuthenticatorAggregateSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatorEdgeKeySpecifier = ('cursor' | 'node' | AuthenticatorEdgeKeySpecifier)[];
export type AuthenticatorEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatorUserUsersAggregationSelectionKeySpecifier = ('count' | 'edge' | 'node' | AuthenticatorUserUsersAggregationSelectionKeySpecifier)[];
export type AuthenticatorUserUsersAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edge?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatorUserUsersEdgeAggregateSelectionKeySpecifier = ('id' | AuthenticatorUserUsersEdgeAggregateSelectionKeySpecifier)[];
export type AuthenticatorUserUsersEdgeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatorUserUsersNodeAggregateSelectionKeySpecifier = ('authId' | 'id' | AuthenticatorUserUsersNodeAggregateSelectionKeySpecifier)[];
export type AuthenticatorUserUsersNodeAggregateSelectionFieldPolicy = {
	authId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatorUsersConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | AuthenticatorUsersConnectionKeySpecifier)[];
export type AuthenticatorUsersConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatorUsersRelationshipKeySpecifier = ('cursor' | 'node' | 'properties' | AuthenticatorUsersRelationshipKeySpecifier)[];
export type AuthenticatorUsersRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticatorsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | AuthenticatorsConnectionKeySpecifier)[];
export type AuthenticatorsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowKeySpecifier = ('brand' | 'comments' | 'commentsAggregate' | 'commentsConnection' | 'id' | 'model' | 'notes' | 'notesAggregate' | 'notesConnection' | 'owner' | 'ownerAggregate' | 'ownerConnection' | 'type' | BowKeySpecifier)[];
export type BowFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	notesAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	notesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowAggregateSelectionKeySpecifier = ('brand' | 'count' | 'id' | 'model' | BowAggregateSelectionKeySpecifier)[];
export type BowAggregateSelectionFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowCommentCommentsAggregationSelectionKeySpecifier = ('count' | 'node' | BowCommentCommentsAggregationSelectionKeySpecifier)[];
export type BowCommentCommentsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowCommentCommentsNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | BowCommentCommentsNodeAggregateSelectionKeySpecifier)[];
export type BowCommentCommentsNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowCommentsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | BowCommentsConnectionKeySpecifier)[];
export type BowCommentsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowCommentsRelationshipKeySpecifier = ('cursor' | 'node' | BowCommentsRelationshipKeySpecifier)[];
export type BowCommentsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowEdgeKeySpecifier = ('cursor' | 'node' | BowEdgeKeySpecifier)[];
export type BowEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowNoteNotesAggregationSelectionKeySpecifier = ('count' | 'node' | BowNoteNotesAggregationSelectionKeySpecifier)[];
export type BowNoteNotesAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowNoteNotesNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | BowNoteNotesNodeAggregateSelectionKeySpecifier)[];
export type BowNoteNotesNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowNotesConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | BowNotesConnectionKeySpecifier)[];
export type BowNotesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowNotesRelationshipKeySpecifier = ('cursor' | 'node' | BowNotesRelationshipKeySpecifier)[];
export type BowNotesRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowOwnerConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | BowOwnerConnectionKeySpecifier)[];
export type BowOwnerConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowOwnerRelationshipKeySpecifier = ('cursor' | 'node' | BowOwnerRelationshipKeySpecifier)[];
export type BowOwnerRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowUserOwnerAggregationSelectionKeySpecifier = ('count' | 'node' | BowUserOwnerAggregationSelectionKeySpecifier)[];
export type BowUserOwnerAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowUserOwnerNodeAggregateSelectionKeySpecifier = ('authId' | 'id' | BowUserOwnerNodeAggregateSelectionKeySpecifier)[];
export type BowUserOwnerNodeAggregateSelectionFieldPolicy = {
	authId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BowsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | BowsConnectionKeySpecifier)[];
export type BowsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartesianPointKeySpecifier = ('crs' | 'srid' | 'x' | 'y' | 'z' | CartesianPointKeySpecifier)[];
export type CartesianPointFieldPolicy = {
	crs?: FieldPolicy<any> | FieldReadFunction<any>,
	srid?: FieldPolicy<any> | FieldReadFunction<any>,
	x?: FieldPolicy<any> | FieldReadFunction<any>,
	y?: FieldPolicy<any> | FieldReadFunction<any>,
	z?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('arrow' | 'arrowAggregate' | 'arrowConnection' | 'bow' | 'bowAggregate' | 'bowConnection' | 'content' | 'date' | 'id' | 'note' | 'noteAggregate' | 'noteConnection' | 'session' | 'sessionAggregate' | 'sessionConnection' | 'set' | 'setAggregate' | 'setConnection' | 'title' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	arrow?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	bow?: FieldPolicy<any> | FieldReadFunction<any>,
	bowAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	bowConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	noteAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	noteConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	set?: FieldPolicy<any> | FieldReadFunction<any>,
	setAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	setConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentAggregateSelectionKeySpecifier = ('content' | 'count' | 'date' | 'id' | 'title' | CommentAggregateSelectionKeySpecifier)[];
export type CommentAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentArrowArrowAggregationSelectionKeySpecifier = ('count' | 'node' | CommentArrowArrowAggregationSelectionKeySpecifier)[];
export type CommentArrowArrowAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentArrowArrowNodeAggregateSelectionKeySpecifier = ('angle' | 'id' | 'number' | 'offset' | 'value' | CommentArrowArrowNodeAggregateSelectionKeySpecifier)[];
export type CommentArrowArrowNodeAggregateSelectionFieldPolicy = {
	angle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentArrowConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CommentArrowConnectionKeySpecifier)[];
export type CommentArrowConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentArrowRelationshipKeySpecifier = ('cursor' | 'node' | CommentArrowRelationshipKeySpecifier)[];
export type CommentArrowRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentBowBowAggregationSelectionKeySpecifier = ('count' | 'node' | CommentBowBowAggregationSelectionKeySpecifier)[];
export type CommentBowBowAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentBowBowNodeAggregateSelectionKeySpecifier = ('brand' | 'id' | 'model' | CommentBowBowNodeAggregateSelectionKeySpecifier)[];
export type CommentBowBowNodeAggregateSelectionFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentBowConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CommentBowConnectionKeySpecifier)[];
export type CommentBowConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentBowRelationshipKeySpecifier = ('cursor' | 'node' | CommentBowRelationshipKeySpecifier)[];
export type CommentBowRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentEdgeKeySpecifier = ('cursor' | 'node' | CommentEdgeKeySpecifier)[];
export type CommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentNoteConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CommentNoteConnectionKeySpecifier)[];
export type CommentNoteConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentNoteNoteAggregationSelectionKeySpecifier = ('count' | 'node' | CommentNoteNoteAggregationSelectionKeySpecifier)[];
export type CommentNoteNoteAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentNoteNoteNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | CommentNoteNoteNodeAggregateSelectionKeySpecifier)[];
export type CommentNoteNoteNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentNoteRelationshipKeySpecifier = ('cursor' | 'node' | CommentNoteRelationshipKeySpecifier)[];
export type CommentNoteRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentSessionConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CommentSessionConnectionKeySpecifier)[];
export type CommentSessionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentSessionRelationshipKeySpecifier = ('cursor' | 'node' | CommentSessionRelationshipKeySpecifier)[];
export type CommentSessionRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentSessionSessionAggregationSelectionKeySpecifier = ('count' | 'node' | CommentSessionSessionAggregationSelectionKeySpecifier)[];
export type CommentSessionSessionAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentSessionSessionNodeAggregateSelectionKeySpecifier = ('date' | 'id' | 'name' | CommentSessionSessionNodeAggregateSelectionKeySpecifier)[];
export type CommentSessionSessionNodeAggregateSelectionFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentSetConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CommentSetConnectionKeySpecifier)[];
export type CommentSetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentSetRelationshipKeySpecifier = ('cursor' | 'node' | CommentSetRelationshipKeySpecifier)[];
export type CommentSetRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentSetSetAggregationSelectionKeySpecifier = ('count' | 'node' | CommentSetSetAggregationSelectionKeySpecifier)[];
export type CommentSetSetAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentSetSetNodeAggregateSelectionKeySpecifier = ('id' | 'number' | CommentSetSetNodeAggregateSelectionKeySpecifier)[];
export type CommentSetSetNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | CommentsConnectionKeySpecifier)[];
export type CommentsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateArrowsMutationResponseKeySpecifier = ('arrows' | 'info' | CreateArrowsMutationResponseKeySpecifier)[];
export type CreateArrowsMutationResponseFieldPolicy = {
	arrows?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateAuthenticatorsMutationResponseKeySpecifier = ('authenticators' | 'info' | CreateAuthenticatorsMutationResponseKeySpecifier)[];
export type CreateAuthenticatorsMutationResponseFieldPolicy = {
	authenticators?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateBowsMutationResponseKeySpecifier = ('bows' | 'info' | CreateBowsMutationResponseKeySpecifier)[];
export type CreateBowsMutationResponseFieldPolicy = {
	bows?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCommentsMutationResponseKeySpecifier = ('comments' | 'info' | CreateCommentsMutationResponseKeySpecifier)[];
export type CreateCommentsMutationResponseFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateEnemiesMutationResponseKeySpecifier = ('enemies' | 'info' | CreateEnemiesMutationResponseKeySpecifier)[];
export type CreateEnemiesMutationResponseFieldPolicy = {
	enemies?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateInfoKeySpecifier = ('bookmark' | 'nodesCreated' | 'relationshipsCreated' | CreateInfoKeySpecifier)[];
export type CreateInfoFieldPolicy = {
	bookmark?: FieldPolicy<any> | FieldReadFunction<any>,
	nodesCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	relationshipsCreated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateLocationsMutationResponseKeySpecifier = ('info' | 'locations' | CreateLocationsMutationResponseKeySpecifier)[];
export type CreateLocationsMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateNotesMutationResponseKeySpecifier = ('info' | 'notes' | CreateNotesMutationResponseKeySpecifier)[];
export type CreateNotesMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateRulesetsMutationResponseKeySpecifier = ('info' | 'rulesets' | CreateRulesetsMutationResponseKeySpecifier)[];
export type CreateRulesetsMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSessionsMutationResponseKeySpecifier = ('info' | 'sessions' | CreateSessionsMutationResponseKeySpecifier)[];
export type CreateSessionsMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSetsMutationResponseKeySpecifier = ('info' | 'sets' | CreateSetsMutationResponseKeySpecifier)[];
export type CreateSetsMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSyntheticSampleResponsesMutationResponseKeySpecifier = ('info' | 'syntheticSampleResponses' | CreateSyntheticSampleResponsesMutationResponseKeySpecifier)[];
export type CreateSyntheticSampleResponsesMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	syntheticSampleResponses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTargetsMutationResponseKeySpecifier = ('info' | 'targets' | CreateTargetsMutationResponseKeySpecifier)[];
export type CreateTargetsMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	targets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateUsersMutationResponseKeySpecifier = ('info' | 'users' | CreateUsersMutationResponseKeySpecifier)[];
export type CreateUsersMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteInfoKeySpecifier = ('bookmark' | 'nodesDeleted' | 'relationshipsDeleted' | DeleteInfoKeySpecifier)[];
export type DeleteInfoFieldPolicy = {
	bookmark?: FieldPolicy<any> | FieldReadFunction<any>,
	nodesDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	relationshipsDeleted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemiesConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | EnemiesConnectionKeySpecifier)[];
export type EnemiesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemyKeySpecifier = ('adaptive' | 'arrows' | 'arrowsAggregate' | 'arrowsConnection' | 'id' | 'max' | 'mean' | 'min' | 'mod' | 'name' | 'sessions' | 'sessionsAggregate' | 'sessionsConnection' | 'sets' | 'setsAggregate' | 'setsConnection' | 'std' | EnemyKeySpecifier)[];
export type EnemyFieldPolicy = {
	adaptive?: FieldPolicy<any> | FieldReadFunction<any>,
	arrows?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	mean?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	mod?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>,
	setsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	setsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	std?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemyAggregateSelectionKeySpecifier = ('count' | 'id' | 'max' | 'mean' | 'min' | 'mod' | 'name' | 'std' | EnemyAggregateSelectionKeySpecifier)[];
export type EnemyAggregateSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	mean?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	mod?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	std?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemyArrowArrowsAggregationSelectionKeySpecifier = ('count' | 'edge' | 'node' | EnemyArrowArrowsAggregationSelectionKeySpecifier)[];
export type EnemyArrowArrowsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edge?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemyArrowArrowsEdgeAggregateSelectionKeySpecifier = ('max' | 'mean' | 'min' | 'std' | EnemyArrowArrowsEdgeAggregateSelectionKeySpecifier)[];
export type EnemyArrowArrowsEdgeAggregateSelectionFieldPolicy = {
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	mean?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	std?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemyArrowArrowsNodeAggregateSelectionKeySpecifier = ('angle' | 'id' | 'number' | 'offset' | 'value' | EnemyArrowArrowsNodeAggregateSelectionKeySpecifier)[];
export type EnemyArrowArrowsNodeAggregateSelectionFieldPolicy = {
	angle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemyArrowsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | EnemyArrowsConnectionKeySpecifier)[];
export type EnemyArrowsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemyArrowsRelationshipKeySpecifier = ('cursor' | 'node' | 'properties' | EnemyArrowsRelationshipKeySpecifier)[];
export type EnemyArrowsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemyEdgeKeySpecifier = ('cursor' | 'node' | EnemyEdgeKeySpecifier)[];
export type EnemyEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemySessionSessionsAggregationSelectionKeySpecifier = ('count' | 'node' | EnemySessionSessionsAggregationSelectionKeySpecifier)[];
export type EnemySessionSessionsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemySessionSessionsNodeAggregateSelectionKeySpecifier = ('date' | 'id' | 'name' | EnemySessionSessionsNodeAggregateSelectionKeySpecifier)[];
export type EnemySessionSessionsNodeAggregateSelectionFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemySessionsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | EnemySessionsConnectionKeySpecifier)[];
export type EnemySessionsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemySessionsRelationshipKeySpecifier = ('cursor' | 'node' | EnemySessionsRelationshipKeySpecifier)[];
export type EnemySessionsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemySetSetsAggregationSelectionKeySpecifier = ('count' | 'node' | EnemySetSetsAggregationSelectionKeySpecifier)[];
export type EnemySetSetsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemySetSetsNodeAggregateSelectionKeySpecifier = ('id' | 'number' | EnemySetSetsNodeAggregateSelectionKeySpecifier)[];
export type EnemySetSetsNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemySetsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | EnemySetsConnectionKeySpecifier)[];
export type EnemySetsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnemySetsRelationshipKeySpecifier = ('cursor' | 'node' | EnemySetsRelationshipKeySpecifier)[];
export type EnemySetsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FloatAggregateSelectionKeySpecifier = ('average' | 'max' | 'min' | 'sum' | FloatAggregateSelectionKeySpecifier)[];
export type FloatAggregateSelectionFieldPolicy = {
	average?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenerationPropertiesKeySpecifier = ('max' | 'mean' | 'min' | 'std' | GenerationPropertiesKeySpecifier)[];
export type GenerationPropertiesFieldPolicy = {
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	mean?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	std?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IDAggregateSelectionKeySpecifier = ('longest' | 'shortest' | IDAggregateSelectionKeySpecifier)[];
export type IDAggregateSelectionFieldPolicy = {
	longest?: FieldPolicy<any> | FieldReadFunction<any>,
	shortest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IntAggregateSelectionKeySpecifier = ('average' | 'max' | 'min' | 'sum' | IntAggregateSelectionKeySpecifier)[];
export type IntAggregateSelectionFieldPolicy = {
	average?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('comments' | 'commentsAggregate' | 'commentsConnection' | 'coordinate' | 'id' | 'name' | 'notes' | 'notesAggregate' | 'notesConnection' | 'sessions' | 'sessionsAggregate' | 'sessionsConnection' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	coordinate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	notesAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	notesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsConnection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationAggregateSelectionKeySpecifier = ('count' | 'id' | 'name' | LocationAggregateSelectionKeySpecifier)[];
export type LocationAggregateSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationCommentCommentsAggregationSelectionKeySpecifier = ('count' | 'node' | LocationCommentCommentsAggregationSelectionKeySpecifier)[];
export type LocationCommentCommentsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationCommentCommentsNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | LocationCommentCommentsNodeAggregateSelectionKeySpecifier)[];
export type LocationCommentCommentsNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationCommentsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | LocationCommentsConnectionKeySpecifier)[];
export type LocationCommentsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationCommentsRelationshipKeySpecifier = ('cursor' | 'node' | LocationCommentsRelationshipKeySpecifier)[];
export type LocationCommentsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationEdgeKeySpecifier = ('cursor' | 'node' | LocationEdgeKeySpecifier)[];
export type LocationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationNoteNotesAggregationSelectionKeySpecifier = ('count' | 'node' | LocationNoteNotesAggregationSelectionKeySpecifier)[];
export type LocationNoteNotesAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationNoteNotesNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | LocationNoteNotesNodeAggregateSelectionKeySpecifier)[];
export type LocationNoteNotesNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationNotesConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | LocationNotesConnectionKeySpecifier)[];
export type LocationNotesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationNotesRelationshipKeySpecifier = ('cursor' | 'node' | LocationNotesRelationshipKeySpecifier)[];
export type LocationNotesRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationSessionSessionsAggregationSelectionKeySpecifier = ('count' | 'node' | LocationSessionSessionsAggregationSelectionKeySpecifier)[];
export type LocationSessionSessionsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationSessionSessionsNodeAggregateSelectionKeySpecifier = ('date' | 'id' | 'name' | LocationSessionSessionsNodeAggregateSelectionKeySpecifier)[];
export type LocationSessionSessionsNodeAggregateSelectionFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationSessionsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | LocationSessionsConnectionKeySpecifier)[];
export type LocationSessionsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationSessionsRelationshipKeySpecifier = ('cursor' | 'node' | LocationSessionsRelationshipKeySpecifier)[];
export type LocationSessionsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | LocationsConnectionKeySpecifier)[];
export type LocationsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createArrows' | 'createAuthenticators' | 'createBows' | 'createComments' | 'createEnemies' | 'createLocations' | 'createNotes' | 'createRulesets' | 'createSessions' | 'createSets' | 'createSyntheticSampleResponses' | 'createTargets' | 'createUsers' | 'deleteArrows' | 'deleteAuthenticators' | 'deleteBows' | 'deleteComments' | 'deleteEnemies' | 'deleteLocations' | 'deleteNotes' | 'deleteRulesets' | 'deleteSessions' | 'deleteSets' | 'deleteSyntheticSampleResponses' | 'deleteTargets' | 'deleteUsers' | 'synthesize' | 'updateArrows' | 'updateAuthenticators' | 'updateBows' | 'updateComments' | 'updateEnemies' | 'updateLocations' | 'updateNotes' | 'updateRulesets' | 'updateSessions' | 'updateSets' | 'updateSyntheticSampleResponses' | 'updateTargets' | 'updateUsers' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createArrows?: FieldPolicy<any> | FieldReadFunction<any>,
	createAuthenticators?: FieldPolicy<any> | FieldReadFunction<any>,
	createBows?: FieldPolicy<any> | FieldReadFunction<any>,
	createComments?: FieldPolicy<any> | FieldReadFunction<any>,
	createEnemies?: FieldPolicy<any> | FieldReadFunction<any>,
	createLocations?: FieldPolicy<any> | FieldReadFunction<any>,
	createNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	createRulesets?: FieldPolicy<any> | FieldReadFunction<any>,
	createSessions?: FieldPolicy<any> | FieldReadFunction<any>,
	createSets?: FieldPolicy<any> | FieldReadFunction<any>,
	createSyntheticSampleResponses?: FieldPolicy<any> | FieldReadFunction<any>,
	createTargets?: FieldPolicy<any> | FieldReadFunction<any>,
	createUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteArrows?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAuthenticators?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBows?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteComments?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEnemies?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteLocations?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRulesets?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSessions?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSets?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSyntheticSampleResponses?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTargets?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	synthesize?: FieldPolicy<any> | FieldReadFunction<any>,
	updateArrows?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAuthenticators?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBows?: FieldPolicy<any> | FieldReadFunction<any>,
	updateComments?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEnemies?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLocations?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRulesets?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSessions?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSets?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSyntheticSampleResponses?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTargets?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUsers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteKeySpecifier = ('arrow' | 'arrowAggregate' | 'arrowConnection' | 'bow' | 'bowAggregate' | 'bowConnection' | 'comments' | 'commentsAggregate' | 'commentsConnection' | 'content' | 'date' | 'id' | 'session' | 'sessionAggregate' | 'sessionConnection' | 'set' | 'setAggregate' | 'setConnection' | 'title' | NoteKeySpecifier)[];
export type NoteFieldPolicy = {
	arrow?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	bow?: FieldPolicy<any> | FieldReadFunction<any>,
	bowAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	bowConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	set?: FieldPolicy<any> | FieldReadFunction<any>,
	setAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	setConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteAggregateSelectionKeySpecifier = ('content' | 'count' | 'date' | 'id' | 'title' | NoteAggregateSelectionKeySpecifier)[];
export type NoteAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteArrowArrowAggregationSelectionKeySpecifier = ('count' | 'node' | NoteArrowArrowAggregationSelectionKeySpecifier)[];
export type NoteArrowArrowAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteArrowArrowNodeAggregateSelectionKeySpecifier = ('angle' | 'id' | 'number' | 'offset' | 'value' | NoteArrowArrowNodeAggregateSelectionKeySpecifier)[];
export type NoteArrowArrowNodeAggregateSelectionFieldPolicy = {
	angle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteArrowConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | NoteArrowConnectionKeySpecifier)[];
export type NoteArrowConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteArrowRelationshipKeySpecifier = ('cursor' | 'node' | NoteArrowRelationshipKeySpecifier)[];
export type NoteArrowRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteBowBowAggregationSelectionKeySpecifier = ('count' | 'node' | NoteBowBowAggregationSelectionKeySpecifier)[];
export type NoteBowBowAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteBowBowNodeAggregateSelectionKeySpecifier = ('brand' | 'id' | 'model' | NoteBowBowNodeAggregateSelectionKeySpecifier)[];
export type NoteBowBowNodeAggregateSelectionFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteBowConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | NoteBowConnectionKeySpecifier)[];
export type NoteBowConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteBowRelationshipKeySpecifier = ('cursor' | 'node' | NoteBowRelationshipKeySpecifier)[];
export type NoteBowRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteCommentCommentsAggregationSelectionKeySpecifier = ('count' | 'node' | NoteCommentCommentsAggregationSelectionKeySpecifier)[];
export type NoteCommentCommentsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteCommentCommentsNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | NoteCommentCommentsNodeAggregateSelectionKeySpecifier)[];
export type NoteCommentCommentsNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteCommentsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | NoteCommentsConnectionKeySpecifier)[];
export type NoteCommentsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteCommentsRelationshipKeySpecifier = ('cursor' | 'node' | NoteCommentsRelationshipKeySpecifier)[];
export type NoteCommentsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteEdgeKeySpecifier = ('cursor' | 'node' | NoteEdgeKeySpecifier)[];
export type NoteEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteSessionConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | NoteSessionConnectionKeySpecifier)[];
export type NoteSessionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteSessionRelationshipKeySpecifier = ('cursor' | 'node' | NoteSessionRelationshipKeySpecifier)[];
export type NoteSessionRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteSessionSessionAggregationSelectionKeySpecifier = ('count' | 'node' | NoteSessionSessionAggregationSelectionKeySpecifier)[];
export type NoteSessionSessionAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteSessionSessionNodeAggregateSelectionKeySpecifier = ('date' | 'id' | 'name' | NoteSessionSessionNodeAggregateSelectionKeySpecifier)[];
export type NoteSessionSessionNodeAggregateSelectionFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteSetConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | NoteSetConnectionKeySpecifier)[];
export type NoteSetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteSetRelationshipKeySpecifier = ('cursor' | 'node' | NoteSetRelationshipKeySpecifier)[];
export type NoteSetRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteSetSetAggregationSelectionKeySpecifier = ('count' | 'node' | NoteSetSetAggregationSelectionKeySpecifier)[];
export type NoteSetSetAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoteSetSetNodeAggregateSelectionKeySpecifier = ('id' | 'number' | NoteSetSetNodeAggregateSelectionKeySpecifier)[];
export type NoteSetSetNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotesConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | NotesConnectionKeySpecifier)[];
export type NotesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PointKeySpecifier = ('crs' | 'height' | 'latitude' | 'longitude' | 'srid' | PointKeySpecifier)[];
export type PointFieldPolicy = {
	crs?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	srid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_service' | 'archers' | 'arrows' | 'arrowsAggregate' | 'arrowsConnection' | 'authenticators' | 'authenticatorsAggregate' | 'authenticatorsConnection' | 'bows' | 'bowsAggregate' | 'bowsConnection' | 'comments' | 'commentsAggregate' | 'commentsConnection' | 'enemies' | 'enemiesAggregate' | 'enemiesConnection' | 'locations' | 'locationsAggregate' | 'locationsConnection' | 'notes' | 'notesAggregate' | 'notesConnection' | 'rulesets' | 'rulesetsAggregate' | 'rulesetsConnection' | 'sessions' | 'sessionsAggregate' | 'sessionsConnection' | 'sets' | 'setsAggregate' | 'setsConnection' | 'syntheticSampleResponses' | 'syntheticSampleResponsesAggregate' | 'syntheticSampleResponsesConnection' | 'targets' | 'targetsAggregate' | 'targetsConnection' | 'users' | 'usersAggregate' | 'usersConnection' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_service?: FieldPolicy<any> | FieldReadFunction<any>,
	archers?: FieldPolicy<any> | FieldReadFunction<any>,
	arrows?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticators?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticatorsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticatorsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	bows?: FieldPolicy<any> | FieldReadFunction<any>,
	bowsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	bowsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	enemies?: FieldPolicy<any> | FieldReadFunction<any>,
	enemiesAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	enemiesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	locationsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	locationsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	notesAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	notesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesets?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesetsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>,
	setsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	setsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	syntheticSampleResponses?: FieldPolicy<any> | FieldReadFunction<any>,
	syntheticSampleResponsesAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	syntheticSampleResponsesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	targets?: FieldPolicy<any> | FieldReadFunction<any>,
	targetsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	targetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	usersConnection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RulesetKeySpecifier = ('arrowsPerSet' | 'discipline' | 'id' | 'mode' | 'timePerArrow' | 'timer' | RulesetKeySpecifier)[];
export type RulesetFieldPolicy = {
	arrowsPerSet?: FieldPolicy<any> | FieldReadFunction<any>,
	discipline?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	timePerArrow?: FieldPolicy<any> | FieldReadFunction<any>,
	timer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RulesetAggregateSelectionKeySpecifier = ('arrowsPerSet' | 'count' | 'id' | 'timePerArrow' | RulesetAggregateSelectionKeySpecifier)[];
export type RulesetAggregateSelectionFieldPolicy = {
	arrowsPerSet?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	timePerArrow?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RulesetEdgeKeySpecifier = ('cursor' | 'node' | RulesetEdgeKeySpecifier)[];
export type RulesetEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RulesetsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | RulesetsConnectionKeySpecifier)[];
export type RulesetsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionKeySpecifier = ('active' | 'comments' | 'commentsAggregate' | 'commentsConnection' | 'date' | 'enemies' | 'enemiesAggregate' | 'enemiesConnection' | 'id' | 'location' | 'locationAggregate' | 'locationConnection' | 'name' | 'notes' | 'notesAggregate' | 'notesConnection' | 'ruleset' | 'rulesetAggregate' | 'rulesetConnection' | 'sets' | 'setsAggregate' | 'setsConnection' | 'users' | 'usersAggregate' | 'usersConnection' | SessionKeySpecifier)[];
export type SessionFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	enemies?: FieldPolicy<any> | FieldReadFunction<any>,
	enemiesAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	enemiesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	locationAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	locationConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	notesAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	notesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ruleset?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesetAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesetConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>,
	setsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	setsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	usersConnection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionAggregateSelectionKeySpecifier = ('count' | 'date' | 'id' | 'name' | SessionAggregateSelectionKeySpecifier)[];
export type SessionAggregateSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionCommentCommentsAggregationSelectionKeySpecifier = ('count' | 'node' | SessionCommentCommentsAggregationSelectionKeySpecifier)[];
export type SessionCommentCommentsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionCommentCommentsNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | SessionCommentCommentsNodeAggregateSelectionKeySpecifier)[];
export type SessionCommentCommentsNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionCommentsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SessionCommentsConnectionKeySpecifier)[];
export type SessionCommentsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionCommentsRelationshipKeySpecifier = ('cursor' | 'node' | SessionCommentsRelationshipKeySpecifier)[];
export type SessionCommentsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionEdgeKeySpecifier = ('cursor' | 'node' | SessionEdgeKeySpecifier)[];
export type SessionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionEnemiesConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SessionEnemiesConnectionKeySpecifier)[];
export type SessionEnemiesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionEnemiesRelationshipKeySpecifier = ('cursor' | 'node' | SessionEnemiesRelationshipKeySpecifier)[];
export type SessionEnemiesRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionEnemyEnemiesAggregationSelectionKeySpecifier = ('count' | 'node' | SessionEnemyEnemiesAggregationSelectionKeySpecifier)[];
export type SessionEnemyEnemiesAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionEnemyEnemiesNodeAggregateSelectionKeySpecifier = ('id' | 'max' | 'mean' | 'min' | 'mod' | 'name' | 'std' | SessionEnemyEnemiesNodeAggregateSelectionKeySpecifier)[];
export type SessionEnemyEnemiesNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	mean?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	mod?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	std?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionLocationConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SessionLocationConnectionKeySpecifier)[];
export type SessionLocationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionLocationLocationAggregationSelectionKeySpecifier = ('count' | 'node' | SessionLocationLocationAggregationSelectionKeySpecifier)[];
export type SessionLocationLocationAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionLocationLocationNodeAggregateSelectionKeySpecifier = ('id' | 'name' | SessionLocationLocationNodeAggregateSelectionKeySpecifier)[];
export type SessionLocationLocationNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionLocationRelationshipKeySpecifier = ('cursor' | 'node' | SessionLocationRelationshipKeySpecifier)[];
export type SessionLocationRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionNoteNotesAggregationSelectionKeySpecifier = ('count' | 'node' | SessionNoteNotesAggregationSelectionKeySpecifier)[];
export type SessionNoteNotesAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionNoteNotesNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | SessionNoteNotesNodeAggregateSelectionKeySpecifier)[];
export type SessionNoteNotesNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionNotesConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SessionNotesConnectionKeySpecifier)[];
export type SessionNotesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionNotesRelationshipKeySpecifier = ('cursor' | 'node' | SessionNotesRelationshipKeySpecifier)[];
export type SessionNotesRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionRulesetConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SessionRulesetConnectionKeySpecifier)[];
export type SessionRulesetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionRulesetRelationshipKeySpecifier = ('cursor' | 'node' | SessionRulesetRelationshipKeySpecifier)[];
export type SessionRulesetRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionRulesetRulesetAggregationSelectionKeySpecifier = ('count' | 'node' | SessionRulesetRulesetAggregationSelectionKeySpecifier)[];
export type SessionRulesetRulesetAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionRulesetRulesetNodeAggregateSelectionKeySpecifier = ('arrowsPerSet' | 'id' | 'timePerArrow' | SessionRulesetRulesetNodeAggregateSelectionKeySpecifier)[];
export type SessionRulesetRulesetNodeAggregateSelectionFieldPolicy = {
	arrowsPerSet?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	timePerArrow?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionSetSetsAggregationSelectionKeySpecifier = ('count' | 'node' | SessionSetSetsAggregationSelectionKeySpecifier)[];
export type SessionSetSetsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionSetSetsNodeAggregateSelectionKeySpecifier = ('id' | 'number' | SessionSetSetsNodeAggregateSelectionKeySpecifier)[];
export type SessionSetSetsNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionSetsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SessionSetsConnectionKeySpecifier)[];
export type SessionSetsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionSetsRelationshipKeySpecifier = ('cursor' | 'node' | SessionSetsRelationshipKeySpecifier)[];
export type SessionSetsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionUserUsersAggregationSelectionKeySpecifier = ('count' | 'node' | SessionUserUsersAggregationSelectionKeySpecifier)[];
export type SessionUserUsersAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionUserUsersNodeAggregateSelectionKeySpecifier = ('authId' | 'id' | SessionUserUsersNodeAggregateSelectionKeySpecifier)[];
export type SessionUserUsersNodeAggregateSelectionFieldPolicy = {
	authId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionUsersConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SessionUsersConnectionKeySpecifier)[];
export type SessionUsersConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionUsersRelationshipKeySpecifier = ('cursor' | 'node' | SessionUsersRelationshipKeySpecifier)[];
export type SessionUsersRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SessionsConnectionKeySpecifier)[];
export type SessionsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetKeySpecifier = ('archer' | 'archerConnection' | 'arrows' | 'arrowsAggregate' | 'arrowsConnection' | 'arrowsInOrder' | 'comments' | 'commentsAggregate' | 'commentsConnection' | 'id' | 'notes' | 'notesAggregate' | 'notesConnection' | 'number' | 'session' | 'sessionAggregate' | 'sessionConnection' | 'shootoff' | 'target' | 'targetAggregate' | 'targetConnection' | SetKeySpecifier)[];
export type SetFieldPolicy = {
	archer?: FieldPolicy<any> | FieldReadFunction<any>,
	archerConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	arrows?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsInOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	notesAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	notesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	shootoff?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	targetAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	targetConnection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetAggregateSelectionKeySpecifier = ('count' | 'id' | 'number' | SetAggregateSelectionKeySpecifier)[];
export type SetAggregateSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetArcherConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SetArcherConnectionKeySpecifier)[];
export type SetArcherConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetArcherRelationshipKeySpecifier = ('cursor' | 'node' | SetArcherRelationshipKeySpecifier)[];
export type SetArcherRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetArrowArrowsAggregationSelectionKeySpecifier = ('count' | 'node' | SetArrowArrowsAggregationSelectionKeySpecifier)[];
export type SetArrowArrowsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetArrowArrowsNodeAggregateSelectionKeySpecifier = ('angle' | 'id' | 'number' | 'offset' | 'value' | SetArrowArrowsNodeAggregateSelectionKeySpecifier)[];
export type SetArrowArrowsNodeAggregateSelectionFieldPolicy = {
	angle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetArrowsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SetArrowsConnectionKeySpecifier)[];
export type SetArrowsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetArrowsRelationshipKeySpecifier = ('cursor' | 'node' | SetArrowsRelationshipKeySpecifier)[];
export type SetArrowsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetCommentCommentsAggregationSelectionKeySpecifier = ('count' | 'node' | SetCommentCommentsAggregationSelectionKeySpecifier)[];
export type SetCommentCommentsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetCommentCommentsNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | SetCommentCommentsNodeAggregateSelectionKeySpecifier)[];
export type SetCommentCommentsNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetCommentsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SetCommentsConnectionKeySpecifier)[];
export type SetCommentsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetCommentsRelationshipKeySpecifier = ('cursor' | 'node' | SetCommentsRelationshipKeySpecifier)[];
export type SetCommentsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetEdgeKeySpecifier = ('cursor' | 'node' | SetEdgeKeySpecifier)[];
export type SetEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetNoteNotesAggregationSelectionKeySpecifier = ('count' | 'node' | SetNoteNotesAggregationSelectionKeySpecifier)[];
export type SetNoteNotesAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetNoteNotesNodeAggregateSelectionKeySpecifier = ('content' | 'date' | 'id' | 'title' | SetNoteNotesNodeAggregateSelectionKeySpecifier)[];
export type SetNoteNotesNodeAggregateSelectionFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetNotesConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SetNotesConnectionKeySpecifier)[];
export type SetNotesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetNotesRelationshipKeySpecifier = ('cursor' | 'node' | SetNotesRelationshipKeySpecifier)[];
export type SetNotesRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetSessionConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SetSessionConnectionKeySpecifier)[];
export type SetSessionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetSessionRelationshipKeySpecifier = ('cursor' | 'node' | SetSessionRelationshipKeySpecifier)[];
export type SetSessionRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetSessionSessionAggregationSelectionKeySpecifier = ('count' | 'node' | SetSessionSessionAggregationSelectionKeySpecifier)[];
export type SetSessionSessionAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetSessionSessionNodeAggregateSelectionKeySpecifier = ('date' | 'id' | 'name' | SetSessionSessionNodeAggregateSelectionKeySpecifier)[];
export type SetSessionSessionNodeAggregateSelectionFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetTargetConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SetTargetConnectionKeySpecifier)[];
export type SetTargetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetTargetRelationshipKeySpecifier = ('cursor' | 'node' | 'properties' | SetTargetRelationshipKeySpecifier)[];
export type SetTargetRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetTargetTargetAggregationSelectionKeySpecifier = ('count' | 'edge' | 'node' | SetTargetTargetAggregationSelectionKeySpecifier)[];
export type SetTargetTargetAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edge?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetTargetTargetEdgeAggregateSelectionKeySpecifier = ('distance' | SetTargetTargetEdgeAggregateSelectionKeySpecifier)[];
export type SetTargetTargetEdgeAggregateSelectionFieldPolicy = {
	distance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetTargetTargetNodeAggregateSelectionKeySpecifier = ('id' | 'max' | 'min' | 'radius' | 'rings' | 'type' | SetTargetTargetNodeAggregateSelectionKeySpecifier)[];
export type SetTargetTargetNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	radius?: FieldPolicy<any> | FieldReadFunction<any>,
	rings?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SetsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SetsConnectionKeySpecifier)[];
export type SetsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StringAggregateSelectionKeySpecifier = ('longest' | 'shortest' | StringAggregateSelectionKeySpecifier)[];
export type StringAggregateSelectionFieldPolicy = {
	longest?: FieldPolicy<any> | FieldReadFunction<any>,
	shortest?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SyntheticSampleResponseKeySpecifier = ('max' | 'mean' | 'message' | 'min' | 'sample' | 'std' | SyntheticSampleResponseKeySpecifier)[];
export type SyntheticSampleResponseFieldPolicy = {
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	mean?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	sample?: FieldPolicy<any> | FieldReadFunction<any>,
	std?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SyntheticSampleResponseAggregateSelectionKeySpecifier = ('count' | 'max' | 'mean' | 'message' | 'min' | 'std' | SyntheticSampleResponseAggregateSelectionKeySpecifier)[];
export type SyntheticSampleResponseAggregateSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	mean?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	std?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SyntheticSampleResponseEdgeKeySpecifier = ('cursor' | 'node' | SyntheticSampleResponseEdgeKeySpecifier)[];
export type SyntheticSampleResponseEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SyntheticSampleResponsesConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | SyntheticSampleResponsesConnectionKeySpecifier)[];
export type SyntheticSampleResponsesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetKeySpecifier = ('arrows' | 'arrowsAggregate' | 'arrowsConnection' | 'id' | 'max' | 'min' | 'radius' | 'rings' | 'sets' | 'setsAggregate' | 'setsConnection' | 'type' | 'xRing' | TargetKeySpecifier)[];
export type TargetFieldPolicy = {
	arrows?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	radius?: FieldPolicy<any> | FieldReadFunction<any>,
	rings?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>,
	setsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	setsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	xRing?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetAggregateSelectionKeySpecifier = ('count' | 'id' | 'max' | 'min' | 'radius' | 'rings' | 'type' | TargetAggregateSelectionKeySpecifier)[];
export type TargetAggregateSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	radius?: FieldPolicy<any> | FieldReadFunction<any>,
	rings?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetArrowArrowsAggregationSelectionKeySpecifier = ('count' | 'edge' | 'node' | TargetArrowArrowsAggregationSelectionKeySpecifier)[];
export type TargetArrowArrowsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edge?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetArrowArrowsEdgeAggregateSelectionKeySpecifier = ('distance' | TargetArrowArrowsEdgeAggregateSelectionKeySpecifier)[];
export type TargetArrowArrowsEdgeAggregateSelectionFieldPolicy = {
	distance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetArrowArrowsNodeAggregateSelectionKeySpecifier = ('angle' | 'id' | 'number' | 'offset' | 'value' | TargetArrowArrowsNodeAggregateSelectionKeySpecifier)[];
export type TargetArrowArrowsNodeAggregateSelectionFieldPolicy = {
	angle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetArrowsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | TargetArrowsConnectionKeySpecifier)[];
export type TargetArrowsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetArrowsRelationshipKeySpecifier = ('cursor' | 'node' | 'properties' | TargetArrowsRelationshipKeySpecifier)[];
export type TargetArrowsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetEdgeKeySpecifier = ('cursor' | 'node' | TargetEdgeKeySpecifier)[];
export type TargetEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetSetSetsAggregationSelectionKeySpecifier = ('count' | 'edge' | 'node' | TargetSetSetsAggregationSelectionKeySpecifier)[];
export type TargetSetSetsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edge?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetSetSetsEdgeAggregateSelectionKeySpecifier = ('distance' | TargetSetSetsEdgeAggregateSelectionKeySpecifier)[];
export type TargetSetSetsEdgeAggregateSelectionFieldPolicy = {
	distance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetSetSetsNodeAggregateSelectionKeySpecifier = ('id' | 'number' | TargetSetSetsNodeAggregateSelectionKeySpecifier)[];
export type TargetSetSetsNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetSetsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | TargetSetsConnectionKeySpecifier)[];
export type TargetSetsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetSetsRelationshipKeySpecifier = ('cursor' | 'node' | 'properties' | TargetSetsRelationshipKeySpecifier)[];
export type TargetSetsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TargetsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | TargetsConnectionKeySpecifier)[];
export type TargetsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateArrowsMutationResponseKeySpecifier = ('arrows' | 'info' | UpdateArrowsMutationResponseKeySpecifier)[];
export type UpdateArrowsMutationResponseFieldPolicy = {
	arrows?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateAuthenticatorsMutationResponseKeySpecifier = ('authenticators' | 'info' | UpdateAuthenticatorsMutationResponseKeySpecifier)[];
export type UpdateAuthenticatorsMutationResponseFieldPolicy = {
	authenticators?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateBowsMutationResponseKeySpecifier = ('bows' | 'info' | UpdateBowsMutationResponseKeySpecifier)[];
export type UpdateBowsMutationResponseFieldPolicy = {
	bows?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCommentsMutationResponseKeySpecifier = ('comments' | 'info' | UpdateCommentsMutationResponseKeySpecifier)[];
export type UpdateCommentsMutationResponseFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateEnemiesMutationResponseKeySpecifier = ('enemies' | 'info' | UpdateEnemiesMutationResponseKeySpecifier)[];
export type UpdateEnemiesMutationResponseFieldPolicy = {
	enemies?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateInfoKeySpecifier = ('bookmark' | 'nodesCreated' | 'nodesDeleted' | 'relationshipsCreated' | 'relationshipsDeleted' | UpdateInfoKeySpecifier)[];
export type UpdateInfoFieldPolicy = {
	bookmark?: FieldPolicy<any> | FieldReadFunction<any>,
	nodesCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodesDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	relationshipsCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	relationshipsDeleted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateLocationsMutationResponseKeySpecifier = ('info' | 'locations' | UpdateLocationsMutationResponseKeySpecifier)[];
export type UpdateLocationsMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateNotesMutationResponseKeySpecifier = ('info' | 'notes' | UpdateNotesMutationResponseKeySpecifier)[];
export type UpdateNotesMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateRulesetsMutationResponseKeySpecifier = ('info' | 'rulesets' | UpdateRulesetsMutationResponseKeySpecifier)[];
export type UpdateRulesetsMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSessionsMutationResponseKeySpecifier = ('info' | 'sessions' | UpdateSessionsMutationResponseKeySpecifier)[];
export type UpdateSessionsMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSetsMutationResponseKeySpecifier = ('info' | 'sets' | UpdateSetsMutationResponseKeySpecifier)[];
export type UpdateSetsMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSyntheticSampleResponsesMutationResponseKeySpecifier = ('info' | 'syntheticSampleResponses' | UpdateSyntheticSampleResponsesMutationResponseKeySpecifier)[];
export type UpdateSyntheticSampleResponsesMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	syntheticSampleResponses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTargetsMutationResponseKeySpecifier = ('info' | 'targets' | UpdateTargetsMutationResponseKeySpecifier)[];
export type UpdateTargetsMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	targets?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUsersMutationResponseKeySpecifier = ('info' | 'users' | UpdateUsersMutationResponseKeySpecifier)[];
export type UpdateUsersMutationResponseFieldPolicy = {
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('arrows' | 'arrowsAggregate' | 'arrowsConnection' | 'authId' | 'authenticator' | 'authenticatorAggregate' | 'authenticatorConnection' | 'bows' | 'bowsAggregate' | 'bowsConnection' | 'id' | 'sessions' | 'sessionsAggregate' | 'sessionsConnection' | 'sets' | 'setsAggregate' | 'setsConnection' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	arrows?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	arrowsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	authId?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticator?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticatorAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticatorConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	bows?: FieldPolicy<any> | FieldReadFunction<any>,
	bowsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	bowsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	sets?: FieldPolicy<any> | FieldReadFunction<any>,
	setsAggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	setsConnection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAggregateSelectionKeySpecifier = ('authId' | 'count' | 'id' | UserAggregateSelectionKeySpecifier)[];
export type UserAggregateSelectionFieldPolicy = {
	authId?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserArrowArrowsAggregationSelectionKeySpecifier = ('count' | 'node' | UserArrowArrowsAggregationSelectionKeySpecifier)[];
export type UserArrowArrowsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserArrowArrowsNodeAggregateSelectionKeySpecifier = ('angle' | 'id' | 'number' | 'offset' | 'value' | UserArrowArrowsNodeAggregateSelectionKeySpecifier)[];
export type UserArrowArrowsNodeAggregateSelectionFieldPolicy = {
	angle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserArrowsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | UserArrowsConnectionKeySpecifier)[];
export type UserArrowsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserArrowsRelationshipKeySpecifier = ('cursor' | 'node' | UserArrowsRelationshipKeySpecifier)[];
export type UserArrowsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticatorAuthenticatorAggregationSelectionKeySpecifier = ('count' | 'edge' | 'node' | UserAuthenticatorAuthenticatorAggregationSelectionKeySpecifier)[];
export type UserAuthenticatorAuthenticatorAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	edge?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticatorAuthenticatorEdgeAggregateSelectionKeySpecifier = ('id' | UserAuthenticatorAuthenticatorEdgeAggregateSelectionKeySpecifier)[];
export type UserAuthenticatorAuthenticatorEdgeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticatorAuthenticatorNodeAggregateSelectionKeySpecifier = ('id' | 'name' | UserAuthenticatorAuthenticatorNodeAggregateSelectionKeySpecifier)[];
export type UserAuthenticatorAuthenticatorNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticatorConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | UserAuthenticatorConnectionKeySpecifier)[];
export type UserAuthenticatorConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAuthenticatorRelationshipKeySpecifier = ('cursor' | 'node' | 'properties' | UserAuthenticatorRelationshipKeySpecifier)[];
export type UserAuthenticatorRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserBowBowsAggregationSelectionKeySpecifier = ('count' | 'node' | UserBowBowsAggregationSelectionKeySpecifier)[];
export type UserBowBowsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserBowBowsNodeAggregateSelectionKeySpecifier = ('brand' | 'id' | 'model' | UserBowBowsNodeAggregateSelectionKeySpecifier)[];
export type UserBowBowsNodeAggregateSelectionFieldPolicy = {
	brand?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserBowsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | UserBowsConnectionKeySpecifier)[];
export type UserBowsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserBowsRelationshipKeySpecifier = ('cursor' | 'node' | UserBowsRelationshipKeySpecifier)[];
export type UserBowsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('cursor' | 'node' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSessionSessionsAggregationSelectionKeySpecifier = ('count' | 'node' | UserSessionSessionsAggregationSelectionKeySpecifier)[];
export type UserSessionSessionsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSessionSessionsNodeAggregateSelectionKeySpecifier = ('date' | 'id' | 'name' | UserSessionSessionsNodeAggregateSelectionKeySpecifier)[];
export type UserSessionSessionsNodeAggregateSelectionFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSessionsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | UserSessionsConnectionKeySpecifier)[];
export type UserSessionsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSessionsRelationshipKeySpecifier = ('cursor' | 'node' | UserSessionsRelationshipKeySpecifier)[];
export type UserSessionsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSetSetsAggregationSelectionKeySpecifier = ('count' | 'node' | UserSetSetsAggregationSelectionKeySpecifier)[];
export type UserSetSetsAggregationSelectionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSetSetsNodeAggregateSelectionKeySpecifier = ('id' | 'number' | UserSetSetsNodeAggregateSelectionKeySpecifier)[];
export type UserSetSetsNodeAggregateSelectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSetsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | UserSetsConnectionKeySpecifier)[];
export type UserSetsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSetsRelationshipKeySpecifier = ('cursor' | 'node' | UserSetsRelationshipKeySpecifier)[];
export type UserSetsRelationshipFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | UsersConnectionKeySpecifier)[];
export type UsersConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ServiceKeySpecifier = ('sdl' | _ServiceKeySpecifier)[];
export type _ServiceFieldPolicy = {
	sdl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Arrow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowKeySpecifier | (() => undefined | ArrowKeySpecifier),
		fields?: ArrowFieldPolicy,
	},
	ArrowAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowAggregateSelectionKeySpecifier | (() => undefined | ArrowAggregateSelectionKeySpecifier),
		fields?: ArrowAggregateSelectionFieldPolicy,
	},
	ArrowArcherConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowArcherConnectionKeySpecifier | (() => undefined | ArrowArcherConnectionKeySpecifier),
		fields?: ArrowArcherConnectionFieldPolicy,
	},
	ArrowArcherRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowArcherRelationshipKeySpecifier | (() => undefined | ArrowArcherRelationshipKeySpecifier),
		fields?: ArrowArcherRelationshipFieldPolicy,
	},
	ArrowCommentCommentsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowCommentCommentsAggregationSelectionKeySpecifier | (() => undefined | ArrowCommentCommentsAggregationSelectionKeySpecifier),
		fields?: ArrowCommentCommentsAggregationSelectionFieldPolicy,
	},
	ArrowCommentCommentsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowCommentCommentsNodeAggregateSelectionKeySpecifier | (() => undefined | ArrowCommentCommentsNodeAggregateSelectionKeySpecifier),
		fields?: ArrowCommentCommentsNodeAggregateSelectionFieldPolicy,
	},
	ArrowCommentsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowCommentsConnectionKeySpecifier | (() => undefined | ArrowCommentsConnectionKeySpecifier),
		fields?: ArrowCommentsConnectionFieldPolicy,
	},
	ArrowCommentsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowCommentsRelationshipKeySpecifier | (() => undefined | ArrowCommentsRelationshipKeySpecifier),
		fields?: ArrowCommentsRelationshipFieldPolicy,
	},
	ArrowEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowEdgeKeySpecifier | (() => undefined | ArrowEdgeKeySpecifier),
		fields?: ArrowEdgeFieldPolicy,
	},
	ArrowNoteNotesAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowNoteNotesAggregationSelectionKeySpecifier | (() => undefined | ArrowNoteNotesAggregationSelectionKeySpecifier),
		fields?: ArrowNoteNotesAggregationSelectionFieldPolicy,
	},
	ArrowNoteNotesNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowNoteNotesNodeAggregateSelectionKeySpecifier | (() => undefined | ArrowNoteNotesNodeAggregateSelectionKeySpecifier),
		fields?: ArrowNoteNotesNodeAggregateSelectionFieldPolicy,
	},
	ArrowNotesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowNotesConnectionKeySpecifier | (() => undefined | ArrowNotesConnectionKeySpecifier),
		fields?: ArrowNotesConnectionFieldPolicy,
	},
	ArrowNotesRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowNotesRelationshipKeySpecifier | (() => undefined | ArrowNotesRelationshipKeySpecifier),
		fields?: ArrowNotesRelationshipFieldPolicy,
	},
	ArrowSetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowSetConnectionKeySpecifier | (() => undefined | ArrowSetConnectionKeySpecifier),
		fields?: ArrowSetConnectionFieldPolicy,
	},
	ArrowSetRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowSetRelationshipKeySpecifier | (() => undefined | ArrowSetRelationshipKeySpecifier),
		fields?: ArrowSetRelationshipFieldPolicy,
	},
	ArrowSetSetAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowSetSetAggregationSelectionKeySpecifier | (() => undefined | ArrowSetSetAggregationSelectionKeySpecifier),
		fields?: ArrowSetSetAggregationSelectionFieldPolicy,
	},
	ArrowSetSetNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowSetSetNodeAggregateSelectionKeySpecifier | (() => undefined | ArrowSetSetNodeAggregateSelectionKeySpecifier),
		fields?: ArrowSetSetNodeAggregateSelectionFieldPolicy,
	},
	ArrowsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArrowsConnectionKeySpecifier | (() => undefined | ArrowsConnectionKeySpecifier),
		fields?: ArrowsConnectionFieldPolicy,
	},
	AtTarget?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AtTargetKeySpecifier | (() => undefined | AtTargetKeySpecifier),
		fields?: AtTargetFieldPolicy,
	},
	Authenticates?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatesKeySpecifier | (() => undefined | AuthenticatesKeySpecifier),
		fields?: AuthenticatesFieldPolicy,
	},
	Authenticator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatorKeySpecifier | (() => undefined | AuthenticatorKeySpecifier),
		fields?: AuthenticatorFieldPolicy,
	},
	AuthenticatorAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatorAggregateSelectionKeySpecifier | (() => undefined | AuthenticatorAggregateSelectionKeySpecifier),
		fields?: AuthenticatorAggregateSelectionFieldPolicy,
	},
	AuthenticatorEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatorEdgeKeySpecifier | (() => undefined | AuthenticatorEdgeKeySpecifier),
		fields?: AuthenticatorEdgeFieldPolicy,
	},
	AuthenticatorUserUsersAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatorUserUsersAggregationSelectionKeySpecifier | (() => undefined | AuthenticatorUserUsersAggregationSelectionKeySpecifier),
		fields?: AuthenticatorUserUsersAggregationSelectionFieldPolicy,
	},
	AuthenticatorUserUsersEdgeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatorUserUsersEdgeAggregateSelectionKeySpecifier | (() => undefined | AuthenticatorUserUsersEdgeAggregateSelectionKeySpecifier),
		fields?: AuthenticatorUserUsersEdgeAggregateSelectionFieldPolicy,
	},
	AuthenticatorUserUsersNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatorUserUsersNodeAggregateSelectionKeySpecifier | (() => undefined | AuthenticatorUserUsersNodeAggregateSelectionKeySpecifier),
		fields?: AuthenticatorUserUsersNodeAggregateSelectionFieldPolicy,
	},
	AuthenticatorUsersConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatorUsersConnectionKeySpecifier | (() => undefined | AuthenticatorUsersConnectionKeySpecifier),
		fields?: AuthenticatorUsersConnectionFieldPolicy,
	},
	AuthenticatorUsersRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatorUsersRelationshipKeySpecifier | (() => undefined | AuthenticatorUsersRelationshipKeySpecifier),
		fields?: AuthenticatorUsersRelationshipFieldPolicy,
	},
	AuthenticatorsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticatorsConnectionKeySpecifier | (() => undefined | AuthenticatorsConnectionKeySpecifier),
		fields?: AuthenticatorsConnectionFieldPolicy,
	},
	Bow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowKeySpecifier | (() => undefined | BowKeySpecifier),
		fields?: BowFieldPolicy,
	},
	BowAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowAggregateSelectionKeySpecifier | (() => undefined | BowAggregateSelectionKeySpecifier),
		fields?: BowAggregateSelectionFieldPolicy,
	},
	BowCommentCommentsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowCommentCommentsAggregationSelectionKeySpecifier | (() => undefined | BowCommentCommentsAggregationSelectionKeySpecifier),
		fields?: BowCommentCommentsAggregationSelectionFieldPolicy,
	},
	BowCommentCommentsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowCommentCommentsNodeAggregateSelectionKeySpecifier | (() => undefined | BowCommentCommentsNodeAggregateSelectionKeySpecifier),
		fields?: BowCommentCommentsNodeAggregateSelectionFieldPolicy,
	},
	BowCommentsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowCommentsConnectionKeySpecifier | (() => undefined | BowCommentsConnectionKeySpecifier),
		fields?: BowCommentsConnectionFieldPolicy,
	},
	BowCommentsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowCommentsRelationshipKeySpecifier | (() => undefined | BowCommentsRelationshipKeySpecifier),
		fields?: BowCommentsRelationshipFieldPolicy,
	},
	BowEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowEdgeKeySpecifier | (() => undefined | BowEdgeKeySpecifier),
		fields?: BowEdgeFieldPolicy,
	},
	BowNoteNotesAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowNoteNotesAggregationSelectionKeySpecifier | (() => undefined | BowNoteNotesAggregationSelectionKeySpecifier),
		fields?: BowNoteNotesAggregationSelectionFieldPolicy,
	},
	BowNoteNotesNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowNoteNotesNodeAggregateSelectionKeySpecifier | (() => undefined | BowNoteNotesNodeAggregateSelectionKeySpecifier),
		fields?: BowNoteNotesNodeAggregateSelectionFieldPolicy,
	},
	BowNotesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowNotesConnectionKeySpecifier | (() => undefined | BowNotesConnectionKeySpecifier),
		fields?: BowNotesConnectionFieldPolicy,
	},
	BowNotesRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowNotesRelationshipKeySpecifier | (() => undefined | BowNotesRelationshipKeySpecifier),
		fields?: BowNotesRelationshipFieldPolicy,
	},
	BowOwnerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowOwnerConnectionKeySpecifier | (() => undefined | BowOwnerConnectionKeySpecifier),
		fields?: BowOwnerConnectionFieldPolicy,
	},
	BowOwnerRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowOwnerRelationshipKeySpecifier | (() => undefined | BowOwnerRelationshipKeySpecifier),
		fields?: BowOwnerRelationshipFieldPolicy,
	},
	BowUserOwnerAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowUserOwnerAggregationSelectionKeySpecifier | (() => undefined | BowUserOwnerAggregationSelectionKeySpecifier),
		fields?: BowUserOwnerAggregationSelectionFieldPolicy,
	},
	BowUserOwnerNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowUserOwnerNodeAggregateSelectionKeySpecifier | (() => undefined | BowUserOwnerNodeAggregateSelectionKeySpecifier),
		fields?: BowUserOwnerNodeAggregateSelectionFieldPolicy,
	},
	BowsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BowsConnectionKeySpecifier | (() => undefined | BowsConnectionKeySpecifier),
		fields?: BowsConnectionFieldPolicy,
	},
	CartesianPoint?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartesianPointKeySpecifier | (() => undefined | CartesianPointKeySpecifier),
		fields?: CartesianPointFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CommentAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentAggregateSelectionKeySpecifier | (() => undefined | CommentAggregateSelectionKeySpecifier),
		fields?: CommentAggregateSelectionFieldPolicy,
	},
	CommentArrowArrowAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentArrowArrowAggregationSelectionKeySpecifier | (() => undefined | CommentArrowArrowAggregationSelectionKeySpecifier),
		fields?: CommentArrowArrowAggregationSelectionFieldPolicy,
	},
	CommentArrowArrowNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentArrowArrowNodeAggregateSelectionKeySpecifier | (() => undefined | CommentArrowArrowNodeAggregateSelectionKeySpecifier),
		fields?: CommentArrowArrowNodeAggregateSelectionFieldPolicy,
	},
	CommentArrowConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentArrowConnectionKeySpecifier | (() => undefined | CommentArrowConnectionKeySpecifier),
		fields?: CommentArrowConnectionFieldPolicy,
	},
	CommentArrowRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentArrowRelationshipKeySpecifier | (() => undefined | CommentArrowRelationshipKeySpecifier),
		fields?: CommentArrowRelationshipFieldPolicy,
	},
	CommentBowBowAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentBowBowAggregationSelectionKeySpecifier | (() => undefined | CommentBowBowAggregationSelectionKeySpecifier),
		fields?: CommentBowBowAggregationSelectionFieldPolicy,
	},
	CommentBowBowNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentBowBowNodeAggregateSelectionKeySpecifier | (() => undefined | CommentBowBowNodeAggregateSelectionKeySpecifier),
		fields?: CommentBowBowNodeAggregateSelectionFieldPolicy,
	},
	CommentBowConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentBowConnectionKeySpecifier | (() => undefined | CommentBowConnectionKeySpecifier),
		fields?: CommentBowConnectionFieldPolicy,
	},
	CommentBowRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentBowRelationshipKeySpecifier | (() => undefined | CommentBowRelationshipKeySpecifier),
		fields?: CommentBowRelationshipFieldPolicy,
	},
	CommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentEdgeKeySpecifier | (() => undefined | CommentEdgeKeySpecifier),
		fields?: CommentEdgeFieldPolicy,
	},
	CommentNoteConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentNoteConnectionKeySpecifier | (() => undefined | CommentNoteConnectionKeySpecifier),
		fields?: CommentNoteConnectionFieldPolicy,
	},
	CommentNoteNoteAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentNoteNoteAggregationSelectionKeySpecifier | (() => undefined | CommentNoteNoteAggregationSelectionKeySpecifier),
		fields?: CommentNoteNoteAggregationSelectionFieldPolicy,
	},
	CommentNoteNoteNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentNoteNoteNodeAggregateSelectionKeySpecifier | (() => undefined | CommentNoteNoteNodeAggregateSelectionKeySpecifier),
		fields?: CommentNoteNoteNodeAggregateSelectionFieldPolicy,
	},
	CommentNoteRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentNoteRelationshipKeySpecifier | (() => undefined | CommentNoteRelationshipKeySpecifier),
		fields?: CommentNoteRelationshipFieldPolicy,
	},
	CommentSessionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentSessionConnectionKeySpecifier | (() => undefined | CommentSessionConnectionKeySpecifier),
		fields?: CommentSessionConnectionFieldPolicy,
	},
	CommentSessionRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentSessionRelationshipKeySpecifier | (() => undefined | CommentSessionRelationshipKeySpecifier),
		fields?: CommentSessionRelationshipFieldPolicy,
	},
	CommentSessionSessionAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentSessionSessionAggregationSelectionKeySpecifier | (() => undefined | CommentSessionSessionAggregationSelectionKeySpecifier),
		fields?: CommentSessionSessionAggregationSelectionFieldPolicy,
	},
	CommentSessionSessionNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentSessionSessionNodeAggregateSelectionKeySpecifier | (() => undefined | CommentSessionSessionNodeAggregateSelectionKeySpecifier),
		fields?: CommentSessionSessionNodeAggregateSelectionFieldPolicy,
	},
	CommentSetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentSetConnectionKeySpecifier | (() => undefined | CommentSetConnectionKeySpecifier),
		fields?: CommentSetConnectionFieldPolicy,
	},
	CommentSetRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentSetRelationshipKeySpecifier | (() => undefined | CommentSetRelationshipKeySpecifier),
		fields?: CommentSetRelationshipFieldPolicy,
	},
	CommentSetSetAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentSetSetAggregationSelectionKeySpecifier | (() => undefined | CommentSetSetAggregationSelectionKeySpecifier),
		fields?: CommentSetSetAggregationSelectionFieldPolicy,
	},
	CommentSetSetNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentSetSetNodeAggregateSelectionKeySpecifier | (() => undefined | CommentSetSetNodeAggregateSelectionKeySpecifier),
		fields?: CommentSetSetNodeAggregateSelectionFieldPolicy,
	},
	CommentsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentsConnectionKeySpecifier | (() => undefined | CommentsConnectionKeySpecifier),
		fields?: CommentsConnectionFieldPolicy,
	},
	CreateArrowsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateArrowsMutationResponseKeySpecifier | (() => undefined | CreateArrowsMutationResponseKeySpecifier),
		fields?: CreateArrowsMutationResponseFieldPolicy,
	},
	CreateAuthenticatorsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateAuthenticatorsMutationResponseKeySpecifier | (() => undefined | CreateAuthenticatorsMutationResponseKeySpecifier),
		fields?: CreateAuthenticatorsMutationResponseFieldPolicy,
	},
	CreateBowsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateBowsMutationResponseKeySpecifier | (() => undefined | CreateBowsMutationResponseKeySpecifier),
		fields?: CreateBowsMutationResponseFieldPolicy,
	},
	CreateCommentsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCommentsMutationResponseKeySpecifier | (() => undefined | CreateCommentsMutationResponseKeySpecifier),
		fields?: CreateCommentsMutationResponseFieldPolicy,
	},
	CreateEnemiesMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateEnemiesMutationResponseKeySpecifier | (() => undefined | CreateEnemiesMutationResponseKeySpecifier),
		fields?: CreateEnemiesMutationResponseFieldPolicy,
	},
	CreateInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateInfoKeySpecifier | (() => undefined | CreateInfoKeySpecifier),
		fields?: CreateInfoFieldPolicy,
	},
	CreateLocationsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateLocationsMutationResponseKeySpecifier | (() => undefined | CreateLocationsMutationResponseKeySpecifier),
		fields?: CreateLocationsMutationResponseFieldPolicy,
	},
	CreateNotesMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateNotesMutationResponseKeySpecifier | (() => undefined | CreateNotesMutationResponseKeySpecifier),
		fields?: CreateNotesMutationResponseFieldPolicy,
	},
	CreateRulesetsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateRulesetsMutationResponseKeySpecifier | (() => undefined | CreateRulesetsMutationResponseKeySpecifier),
		fields?: CreateRulesetsMutationResponseFieldPolicy,
	},
	CreateSessionsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSessionsMutationResponseKeySpecifier | (() => undefined | CreateSessionsMutationResponseKeySpecifier),
		fields?: CreateSessionsMutationResponseFieldPolicy,
	},
	CreateSetsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSetsMutationResponseKeySpecifier | (() => undefined | CreateSetsMutationResponseKeySpecifier),
		fields?: CreateSetsMutationResponseFieldPolicy,
	},
	CreateSyntheticSampleResponsesMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSyntheticSampleResponsesMutationResponseKeySpecifier | (() => undefined | CreateSyntheticSampleResponsesMutationResponseKeySpecifier),
		fields?: CreateSyntheticSampleResponsesMutationResponseFieldPolicy,
	},
	CreateTargetsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTargetsMutationResponseKeySpecifier | (() => undefined | CreateTargetsMutationResponseKeySpecifier),
		fields?: CreateTargetsMutationResponseFieldPolicy,
	},
	CreateUsersMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateUsersMutationResponseKeySpecifier | (() => undefined | CreateUsersMutationResponseKeySpecifier),
		fields?: CreateUsersMutationResponseFieldPolicy,
	},
	DeleteInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteInfoKeySpecifier | (() => undefined | DeleteInfoKeySpecifier),
		fields?: DeleteInfoFieldPolicy,
	},
	EnemiesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemiesConnectionKeySpecifier | (() => undefined | EnemiesConnectionKeySpecifier),
		fields?: EnemiesConnectionFieldPolicy,
	},
	Enemy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemyKeySpecifier | (() => undefined | EnemyKeySpecifier),
		fields?: EnemyFieldPolicy,
	},
	EnemyAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemyAggregateSelectionKeySpecifier | (() => undefined | EnemyAggregateSelectionKeySpecifier),
		fields?: EnemyAggregateSelectionFieldPolicy,
	},
	EnemyArrowArrowsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemyArrowArrowsAggregationSelectionKeySpecifier | (() => undefined | EnemyArrowArrowsAggregationSelectionKeySpecifier),
		fields?: EnemyArrowArrowsAggregationSelectionFieldPolicy,
	},
	EnemyArrowArrowsEdgeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemyArrowArrowsEdgeAggregateSelectionKeySpecifier | (() => undefined | EnemyArrowArrowsEdgeAggregateSelectionKeySpecifier),
		fields?: EnemyArrowArrowsEdgeAggregateSelectionFieldPolicy,
	},
	EnemyArrowArrowsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemyArrowArrowsNodeAggregateSelectionKeySpecifier | (() => undefined | EnemyArrowArrowsNodeAggregateSelectionKeySpecifier),
		fields?: EnemyArrowArrowsNodeAggregateSelectionFieldPolicy,
	},
	EnemyArrowsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemyArrowsConnectionKeySpecifier | (() => undefined | EnemyArrowsConnectionKeySpecifier),
		fields?: EnemyArrowsConnectionFieldPolicy,
	},
	EnemyArrowsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemyArrowsRelationshipKeySpecifier | (() => undefined | EnemyArrowsRelationshipKeySpecifier),
		fields?: EnemyArrowsRelationshipFieldPolicy,
	},
	EnemyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemyEdgeKeySpecifier | (() => undefined | EnemyEdgeKeySpecifier),
		fields?: EnemyEdgeFieldPolicy,
	},
	EnemySessionSessionsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemySessionSessionsAggregationSelectionKeySpecifier | (() => undefined | EnemySessionSessionsAggregationSelectionKeySpecifier),
		fields?: EnemySessionSessionsAggregationSelectionFieldPolicy,
	},
	EnemySessionSessionsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemySessionSessionsNodeAggregateSelectionKeySpecifier | (() => undefined | EnemySessionSessionsNodeAggregateSelectionKeySpecifier),
		fields?: EnemySessionSessionsNodeAggregateSelectionFieldPolicy,
	},
	EnemySessionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemySessionsConnectionKeySpecifier | (() => undefined | EnemySessionsConnectionKeySpecifier),
		fields?: EnemySessionsConnectionFieldPolicy,
	},
	EnemySessionsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemySessionsRelationshipKeySpecifier | (() => undefined | EnemySessionsRelationshipKeySpecifier),
		fields?: EnemySessionsRelationshipFieldPolicy,
	},
	EnemySetSetsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemySetSetsAggregationSelectionKeySpecifier | (() => undefined | EnemySetSetsAggregationSelectionKeySpecifier),
		fields?: EnemySetSetsAggregationSelectionFieldPolicy,
	},
	EnemySetSetsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemySetSetsNodeAggregateSelectionKeySpecifier | (() => undefined | EnemySetSetsNodeAggregateSelectionKeySpecifier),
		fields?: EnemySetSetsNodeAggregateSelectionFieldPolicy,
	},
	EnemySetsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemySetsConnectionKeySpecifier | (() => undefined | EnemySetsConnectionKeySpecifier),
		fields?: EnemySetsConnectionFieldPolicy,
	},
	EnemySetsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnemySetsRelationshipKeySpecifier | (() => undefined | EnemySetsRelationshipKeySpecifier),
		fields?: EnemySetsRelationshipFieldPolicy,
	},
	FloatAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FloatAggregateSelectionKeySpecifier | (() => undefined | FloatAggregateSelectionKeySpecifier),
		fields?: FloatAggregateSelectionFieldPolicy,
	},
	GenerationProperties?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenerationPropertiesKeySpecifier | (() => undefined | GenerationPropertiesKeySpecifier),
		fields?: GenerationPropertiesFieldPolicy,
	},
	IDAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IDAggregateSelectionKeySpecifier | (() => undefined | IDAggregateSelectionKeySpecifier),
		fields?: IDAggregateSelectionFieldPolicy,
	},
	IntAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IntAggregateSelectionKeySpecifier | (() => undefined | IntAggregateSelectionKeySpecifier),
		fields?: IntAggregateSelectionFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	LocationAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationAggregateSelectionKeySpecifier | (() => undefined | LocationAggregateSelectionKeySpecifier),
		fields?: LocationAggregateSelectionFieldPolicy,
	},
	LocationCommentCommentsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationCommentCommentsAggregationSelectionKeySpecifier | (() => undefined | LocationCommentCommentsAggregationSelectionKeySpecifier),
		fields?: LocationCommentCommentsAggregationSelectionFieldPolicy,
	},
	LocationCommentCommentsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationCommentCommentsNodeAggregateSelectionKeySpecifier | (() => undefined | LocationCommentCommentsNodeAggregateSelectionKeySpecifier),
		fields?: LocationCommentCommentsNodeAggregateSelectionFieldPolicy,
	},
	LocationCommentsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationCommentsConnectionKeySpecifier | (() => undefined | LocationCommentsConnectionKeySpecifier),
		fields?: LocationCommentsConnectionFieldPolicy,
	},
	LocationCommentsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationCommentsRelationshipKeySpecifier | (() => undefined | LocationCommentsRelationshipKeySpecifier),
		fields?: LocationCommentsRelationshipFieldPolicy,
	},
	LocationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationEdgeKeySpecifier | (() => undefined | LocationEdgeKeySpecifier),
		fields?: LocationEdgeFieldPolicy,
	},
	LocationNoteNotesAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationNoteNotesAggregationSelectionKeySpecifier | (() => undefined | LocationNoteNotesAggregationSelectionKeySpecifier),
		fields?: LocationNoteNotesAggregationSelectionFieldPolicy,
	},
	LocationNoteNotesNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationNoteNotesNodeAggregateSelectionKeySpecifier | (() => undefined | LocationNoteNotesNodeAggregateSelectionKeySpecifier),
		fields?: LocationNoteNotesNodeAggregateSelectionFieldPolicy,
	},
	LocationNotesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationNotesConnectionKeySpecifier | (() => undefined | LocationNotesConnectionKeySpecifier),
		fields?: LocationNotesConnectionFieldPolicy,
	},
	LocationNotesRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationNotesRelationshipKeySpecifier | (() => undefined | LocationNotesRelationshipKeySpecifier),
		fields?: LocationNotesRelationshipFieldPolicy,
	},
	LocationSessionSessionsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationSessionSessionsAggregationSelectionKeySpecifier | (() => undefined | LocationSessionSessionsAggregationSelectionKeySpecifier),
		fields?: LocationSessionSessionsAggregationSelectionFieldPolicy,
	},
	LocationSessionSessionsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationSessionSessionsNodeAggregateSelectionKeySpecifier | (() => undefined | LocationSessionSessionsNodeAggregateSelectionKeySpecifier),
		fields?: LocationSessionSessionsNodeAggregateSelectionFieldPolicy,
	},
	LocationSessionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationSessionsConnectionKeySpecifier | (() => undefined | LocationSessionsConnectionKeySpecifier),
		fields?: LocationSessionsConnectionFieldPolicy,
	},
	LocationSessionsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationSessionsRelationshipKeySpecifier | (() => undefined | LocationSessionsRelationshipKeySpecifier),
		fields?: LocationSessionsRelationshipFieldPolicy,
	},
	LocationsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationsConnectionKeySpecifier | (() => undefined | LocationsConnectionKeySpecifier),
		fields?: LocationsConnectionFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Note?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteKeySpecifier | (() => undefined | NoteKeySpecifier),
		fields?: NoteFieldPolicy,
	},
	NoteAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteAggregateSelectionKeySpecifier | (() => undefined | NoteAggregateSelectionKeySpecifier),
		fields?: NoteAggregateSelectionFieldPolicy,
	},
	NoteArrowArrowAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteArrowArrowAggregationSelectionKeySpecifier | (() => undefined | NoteArrowArrowAggregationSelectionKeySpecifier),
		fields?: NoteArrowArrowAggregationSelectionFieldPolicy,
	},
	NoteArrowArrowNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteArrowArrowNodeAggregateSelectionKeySpecifier | (() => undefined | NoteArrowArrowNodeAggregateSelectionKeySpecifier),
		fields?: NoteArrowArrowNodeAggregateSelectionFieldPolicy,
	},
	NoteArrowConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteArrowConnectionKeySpecifier | (() => undefined | NoteArrowConnectionKeySpecifier),
		fields?: NoteArrowConnectionFieldPolicy,
	},
	NoteArrowRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteArrowRelationshipKeySpecifier | (() => undefined | NoteArrowRelationshipKeySpecifier),
		fields?: NoteArrowRelationshipFieldPolicy,
	},
	NoteBowBowAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteBowBowAggregationSelectionKeySpecifier | (() => undefined | NoteBowBowAggregationSelectionKeySpecifier),
		fields?: NoteBowBowAggregationSelectionFieldPolicy,
	},
	NoteBowBowNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteBowBowNodeAggregateSelectionKeySpecifier | (() => undefined | NoteBowBowNodeAggregateSelectionKeySpecifier),
		fields?: NoteBowBowNodeAggregateSelectionFieldPolicy,
	},
	NoteBowConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteBowConnectionKeySpecifier | (() => undefined | NoteBowConnectionKeySpecifier),
		fields?: NoteBowConnectionFieldPolicy,
	},
	NoteBowRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteBowRelationshipKeySpecifier | (() => undefined | NoteBowRelationshipKeySpecifier),
		fields?: NoteBowRelationshipFieldPolicy,
	},
	NoteCommentCommentsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteCommentCommentsAggregationSelectionKeySpecifier | (() => undefined | NoteCommentCommentsAggregationSelectionKeySpecifier),
		fields?: NoteCommentCommentsAggregationSelectionFieldPolicy,
	},
	NoteCommentCommentsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteCommentCommentsNodeAggregateSelectionKeySpecifier | (() => undefined | NoteCommentCommentsNodeAggregateSelectionKeySpecifier),
		fields?: NoteCommentCommentsNodeAggregateSelectionFieldPolicy,
	},
	NoteCommentsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteCommentsConnectionKeySpecifier | (() => undefined | NoteCommentsConnectionKeySpecifier),
		fields?: NoteCommentsConnectionFieldPolicy,
	},
	NoteCommentsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteCommentsRelationshipKeySpecifier | (() => undefined | NoteCommentsRelationshipKeySpecifier),
		fields?: NoteCommentsRelationshipFieldPolicy,
	},
	NoteEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteEdgeKeySpecifier | (() => undefined | NoteEdgeKeySpecifier),
		fields?: NoteEdgeFieldPolicy,
	},
	NoteSessionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteSessionConnectionKeySpecifier | (() => undefined | NoteSessionConnectionKeySpecifier),
		fields?: NoteSessionConnectionFieldPolicy,
	},
	NoteSessionRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteSessionRelationshipKeySpecifier | (() => undefined | NoteSessionRelationshipKeySpecifier),
		fields?: NoteSessionRelationshipFieldPolicy,
	},
	NoteSessionSessionAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteSessionSessionAggregationSelectionKeySpecifier | (() => undefined | NoteSessionSessionAggregationSelectionKeySpecifier),
		fields?: NoteSessionSessionAggregationSelectionFieldPolicy,
	},
	NoteSessionSessionNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteSessionSessionNodeAggregateSelectionKeySpecifier | (() => undefined | NoteSessionSessionNodeAggregateSelectionKeySpecifier),
		fields?: NoteSessionSessionNodeAggregateSelectionFieldPolicy,
	},
	NoteSetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteSetConnectionKeySpecifier | (() => undefined | NoteSetConnectionKeySpecifier),
		fields?: NoteSetConnectionFieldPolicy,
	},
	NoteSetRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteSetRelationshipKeySpecifier | (() => undefined | NoteSetRelationshipKeySpecifier),
		fields?: NoteSetRelationshipFieldPolicy,
	},
	NoteSetSetAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteSetSetAggregationSelectionKeySpecifier | (() => undefined | NoteSetSetAggregationSelectionKeySpecifier),
		fields?: NoteSetSetAggregationSelectionFieldPolicy,
	},
	NoteSetSetNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoteSetSetNodeAggregateSelectionKeySpecifier | (() => undefined | NoteSetSetNodeAggregateSelectionKeySpecifier),
		fields?: NoteSetSetNodeAggregateSelectionFieldPolicy,
	},
	NotesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotesConnectionKeySpecifier | (() => undefined | NotesConnectionKeySpecifier),
		fields?: NotesConnectionFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Point?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PointKeySpecifier | (() => undefined | PointKeySpecifier),
		fields?: PointFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Ruleset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RulesetKeySpecifier | (() => undefined | RulesetKeySpecifier),
		fields?: RulesetFieldPolicy,
	},
	RulesetAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RulesetAggregateSelectionKeySpecifier | (() => undefined | RulesetAggregateSelectionKeySpecifier),
		fields?: RulesetAggregateSelectionFieldPolicy,
	},
	RulesetEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RulesetEdgeKeySpecifier | (() => undefined | RulesetEdgeKeySpecifier),
		fields?: RulesetEdgeFieldPolicy,
	},
	RulesetsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RulesetsConnectionKeySpecifier | (() => undefined | RulesetsConnectionKeySpecifier),
		fields?: RulesetsConnectionFieldPolicy,
	},
	Session?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionKeySpecifier | (() => undefined | SessionKeySpecifier),
		fields?: SessionFieldPolicy,
	},
	SessionAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionAggregateSelectionKeySpecifier | (() => undefined | SessionAggregateSelectionKeySpecifier),
		fields?: SessionAggregateSelectionFieldPolicy,
	},
	SessionCommentCommentsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionCommentCommentsAggregationSelectionKeySpecifier | (() => undefined | SessionCommentCommentsAggregationSelectionKeySpecifier),
		fields?: SessionCommentCommentsAggregationSelectionFieldPolicy,
	},
	SessionCommentCommentsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionCommentCommentsNodeAggregateSelectionKeySpecifier | (() => undefined | SessionCommentCommentsNodeAggregateSelectionKeySpecifier),
		fields?: SessionCommentCommentsNodeAggregateSelectionFieldPolicy,
	},
	SessionCommentsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionCommentsConnectionKeySpecifier | (() => undefined | SessionCommentsConnectionKeySpecifier),
		fields?: SessionCommentsConnectionFieldPolicy,
	},
	SessionCommentsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionCommentsRelationshipKeySpecifier | (() => undefined | SessionCommentsRelationshipKeySpecifier),
		fields?: SessionCommentsRelationshipFieldPolicy,
	},
	SessionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionEdgeKeySpecifier | (() => undefined | SessionEdgeKeySpecifier),
		fields?: SessionEdgeFieldPolicy,
	},
	SessionEnemiesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionEnemiesConnectionKeySpecifier | (() => undefined | SessionEnemiesConnectionKeySpecifier),
		fields?: SessionEnemiesConnectionFieldPolicy,
	},
	SessionEnemiesRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionEnemiesRelationshipKeySpecifier | (() => undefined | SessionEnemiesRelationshipKeySpecifier),
		fields?: SessionEnemiesRelationshipFieldPolicy,
	},
	SessionEnemyEnemiesAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionEnemyEnemiesAggregationSelectionKeySpecifier | (() => undefined | SessionEnemyEnemiesAggregationSelectionKeySpecifier),
		fields?: SessionEnemyEnemiesAggregationSelectionFieldPolicy,
	},
	SessionEnemyEnemiesNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionEnemyEnemiesNodeAggregateSelectionKeySpecifier | (() => undefined | SessionEnemyEnemiesNodeAggregateSelectionKeySpecifier),
		fields?: SessionEnemyEnemiesNodeAggregateSelectionFieldPolicy,
	},
	SessionLocationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionLocationConnectionKeySpecifier | (() => undefined | SessionLocationConnectionKeySpecifier),
		fields?: SessionLocationConnectionFieldPolicy,
	},
	SessionLocationLocationAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionLocationLocationAggregationSelectionKeySpecifier | (() => undefined | SessionLocationLocationAggregationSelectionKeySpecifier),
		fields?: SessionLocationLocationAggregationSelectionFieldPolicy,
	},
	SessionLocationLocationNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionLocationLocationNodeAggregateSelectionKeySpecifier | (() => undefined | SessionLocationLocationNodeAggregateSelectionKeySpecifier),
		fields?: SessionLocationLocationNodeAggregateSelectionFieldPolicy,
	},
	SessionLocationRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionLocationRelationshipKeySpecifier | (() => undefined | SessionLocationRelationshipKeySpecifier),
		fields?: SessionLocationRelationshipFieldPolicy,
	},
	SessionNoteNotesAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionNoteNotesAggregationSelectionKeySpecifier | (() => undefined | SessionNoteNotesAggregationSelectionKeySpecifier),
		fields?: SessionNoteNotesAggregationSelectionFieldPolicy,
	},
	SessionNoteNotesNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionNoteNotesNodeAggregateSelectionKeySpecifier | (() => undefined | SessionNoteNotesNodeAggregateSelectionKeySpecifier),
		fields?: SessionNoteNotesNodeAggregateSelectionFieldPolicy,
	},
	SessionNotesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionNotesConnectionKeySpecifier | (() => undefined | SessionNotesConnectionKeySpecifier),
		fields?: SessionNotesConnectionFieldPolicy,
	},
	SessionNotesRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionNotesRelationshipKeySpecifier | (() => undefined | SessionNotesRelationshipKeySpecifier),
		fields?: SessionNotesRelationshipFieldPolicy,
	},
	SessionRulesetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionRulesetConnectionKeySpecifier | (() => undefined | SessionRulesetConnectionKeySpecifier),
		fields?: SessionRulesetConnectionFieldPolicy,
	},
	SessionRulesetRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionRulesetRelationshipKeySpecifier | (() => undefined | SessionRulesetRelationshipKeySpecifier),
		fields?: SessionRulesetRelationshipFieldPolicy,
	},
	SessionRulesetRulesetAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionRulesetRulesetAggregationSelectionKeySpecifier | (() => undefined | SessionRulesetRulesetAggregationSelectionKeySpecifier),
		fields?: SessionRulesetRulesetAggregationSelectionFieldPolicy,
	},
	SessionRulesetRulesetNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionRulesetRulesetNodeAggregateSelectionKeySpecifier | (() => undefined | SessionRulesetRulesetNodeAggregateSelectionKeySpecifier),
		fields?: SessionRulesetRulesetNodeAggregateSelectionFieldPolicy,
	},
	SessionSetSetsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionSetSetsAggregationSelectionKeySpecifier | (() => undefined | SessionSetSetsAggregationSelectionKeySpecifier),
		fields?: SessionSetSetsAggregationSelectionFieldPolicy,
	},
	SessionSetSetsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionSetSetsNodeAggregateSelectionKeySpecifier | (() => undefined | SessionSetSetsNodeAggregateSelectionKeySpecifier),
		fields?: SessionSetSetsNodeAggregateSelectionFieldPolicy,
	},
	SessionSetsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionSetsConnectionKeySpecifier | (() => undefined | SessionSetsConnectionKeySpecifier),
		fields?: SessionSetsConnectionFieldPolicy,
	},
	SessionSetsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionSetsRelationshipKeySpecifier | (() => undefined | SessionSetsRelationshipKeySpecifier),
		fields?: SessionSetsRelationshipFieldPolicy,
	},
	SessionUserUsersAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionUserUsersAggregationSelectionKeySpecifier | (() => undefined | SessionUserUsersAggregationSelectionKeySpecifier),
		fields?: SessionUserUsersAggregationSelectionFieldPolicy,
	},
	SessionUserUsersNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionUserUsersNodeAggregateSelectionKeySpecifier | (() => undefined | SessionUserUsersNodeAggregateSelectionKeySpecifier),
		fields?: SessionUserUsersNodeAggregateSelectionFieldPolicy,
	},
	SessionUsersConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionUsersConnectionKeySpecifier | (() => undefined | SessionUsersConnectionKeySpecifier),
		fields?: SessionUsersConnectionFieldPolicy,
	},
	SessionUsersRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionUsersRelationshipKeySpecifier | (() => undefined | SessionUsersRelationshipKeySpecifier),
		fields?: SessionUsersRelationshipFieldPolicy,
	},
	SessionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionsConnectionKeySpecifier | (() => undefined | SessionsConnectionKeySpecifier),
		fields?: SessionsConnectionFieldPolicy,
	},
	Set?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetKeySpecifier | (() => undefined | SetKeySpecifier),
		fields?: SetFieldPolicy,
	},
	SetAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetAggregateSelectionKeySpecifier | (() => undefined | SetAggregateSelectionKeySpecifier),
		fields?: SetAggregateSelectionFieldPolicy,
	},
	SetArcherConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetArcherConnectionKeySpecifier | (() => undefined | SetArcherConnectionKeySpecifier),
		fields?: SetArcherConnectionFieldPolicy,
	},
	SetArcherRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetArcherRelationshipKeySpecifier | (() => undefined | SetArcherRelationshipKeySpecifier),
		fields?: SetArcherRelationshipFieldPolicy,
	},
	SetArrowArrowsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetArrowArrowsAggregationSelectionKeySpecifier | (() => undefined | SetArrowArrowsAggregationSelectionKeySpecifier),
		fields?: SetArrowArrowsAggregationSelectionFieldPolicy,
	},
	SetArrowArrowsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetArrowArrowsNodeAggregateSelectionKeySpecifier | (() => undefined | SetArrowArrowsNodeAggregateSelectionKeySpecifier),
		fields?: SetArrowArrowsNodeAggregateSelectionFieldPolicy,
	},
	SetArrowsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetArrowsConnectionKeySpecifier | (() => undefined | SetArrowsConnectionKeySpecifier),
		fields?: SetArrowsConnectionFieldPolicy,
	},
	SetArrowsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetArrowsRelationshipKeySpecifier | (() => undefined | SetArrowsRelationshipKeySpecifier),
		fields?: SetArrowsRelationshipFieldPolicy,
	},
	SetCommentCommentsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetCommentCommentsAggregationSelectionKeySpecifier | (() => undefined | SetCommentCommentsAggregationSelectionKeySpecifier),
		fields?: SetCommentCommentsAggregationSelectionFieldPolicy,
	},
	SetCommentCommentsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetCommentCommentsNodeAggregateSelectionKeySpecifier | (() => undefined | SetCommentCommentsNodeAggregateSelectionKeySpecifier),
		fields?: SetCommentCommentsNodeAggregateSelectionFieldPolicy,
	},
	SetCommentsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetCommentsConnectionKeySpecifier | (() => undefined | SetCommentsConnectionKeySpecifier),
		fields?: SetCommentsConnectionFieldPolicy,
	},
	SetCommentsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetCommentsRelationshipKeySpecifier | (() => undefined | SetCommentsRelationshipKeySpecifier),
		fields?: SetCommentsRelationshipFieldPolicy,
	},
	SetEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetEdgeKeySpecifier | (() => undefined | SetEdgeKeySpecifier),
		fields?: SetEdgeFieldPolicy,
	},
	SetNoteNotesAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetNoteNotesAggregationSelectionKeySpecifier | (() => undefined | SetNoteNotesAggregationSelectionKeySpecifier),
		fields?: SetNoteNotesAggregationSelectionFieldPolicy,
	},
	SetNoteNotesNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetNoteNotesNodeAggregateSelectionKeySpecifier | (() => undefined | SetNoteNotesNodeAggregateSelectionKeySpecifier),
		fields?: SetNoteNotesNodeAggregateSelectionFieldPolicy,
	},
	SetNotesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetNotesConnectionKeySpecifier | (() => undefined | SetNotesConnectionKeySpecifier),
		fields?: SetNotesConnectionFieldPolicy,
	},
	SetNotesRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetNotesRelationshipKeySpecifier | (() => undefined | SetNotesRelationshipKeySpecifier),
		fields?: SetNotesRelationshipFieldPolicy,
	},
	SetSessionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetSessionConnectionKeySpecifier | (() => undefined | SetSessionConnectionKeySpecifier),
		fields?: SetSessionConnectionFieldPolicy,
	},
	SetSessionRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetSessionRelationshipKeySpecifier | (() => undefined | SetSessionRelationshipKeySpecifier),
		fields?: SetSessionRelationshipFieldPolicy,
	},
	SetSessionSessionAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetSessionSessionAggregationSelectionKeySpecifier | (() => undefined | SetSessionSessionAggregationSelectionKeySpecifier),
		fields?: SetSessionSessionAggregationSelectionFieldPolicy,
	},
	SetSessionSessionNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetSessionSessionNodeAggregateSelectionKeySpecifier | (() => undefined | SetSessionSessionNodeAggregateSelectionKeySpecifier),
		fields?: SetSessionSessionNodeAggregateSelectionFieldPolicy,
	},
	SetTargetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetTargetConnectionKeySpecifier | (() => undefined | SetTargetConnectionKeySpecifier),
		fields?: SetTargetConnectionFieldPolicy,
	},
	SetTargetRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetTargetRelationshipKeySpecifier | (() => undefined | SetTargetRelationshipKeySpecifier),
		fields?: SetTargetRelationshipFieldPolicy,
	},
	SetTargetTargetAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetTargetTargetAggregationSelectionKeySpecifier | (() => undefined | SetTargetTargetAggregationSelectionKeySpecifier),
		fields?: SetTargetTargetAggregationSelectionFieldPolicy,
	},
	SetTargetTargetEdgeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetTargetTargetEdgeAggregateSelectionKeySpecifier | (() => undefined | SetTargetTargetEdgeAggregateSelectionKeySpecifier),
		fields?: SetTargetTargetEdgeAggregateSelectionFieldPolicy,
	},
	SetTargetTargetNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetTargetTargetNodeAggregateSelectionKeySpecifier | (() => undefined | SetTargetTargetNodeAggregateSelectionKeySpecifier),
		fields?: SetTargetTargetNodeAggregateSelectionFieldPolicy,
	},
	SetsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SetsConnectionKeySpecifier | (() => undefined | SetsConnectionKeySpecifier),
		fields?: SetsConnectionFieldPolicy,
	},
	StringAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StringAggregateSelectionKeySpecifier | (() => undefined | StringAggregateSelectionKeySpecifier),
		fields?: StringAggregateSelectionFieldPolicy,
	},
	SyntheticSampleResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SyntheticSampleResponseKeySpecifier | (() => undefined | SyntheticSampleResponseKeySpecifier),
		fields?: SyntheticSampleResponseFieldPolicy,
	},
	SyntheticSampleResponseAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SyntheticSampleResponseAggregateSelectionKeySpecifier | (() => undefined | SyntheticSampleResponseAggregateSelectionKeySpecifier),
		fields?: SyntheticSampleResponseAggregateSelectionFieldPolicy,
	},
	SyntheticSampleResponseEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SyntheticSampleResponseEdgeKeySpecifier | (() => undefined | SyntheticSampleResponseEdgeKeySpecifier),
		fields?: SyntheticSampleResponseEdgeFieldPolicy,
	},
	SyntheticSampleResponsesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SyntheticSampleResponsesConnectionKeySpecifier | (() => undefined | SyntheticSampleResponsesConnectionKeySpecifier),
		fields?: SyntheticSampleResponsesConnectionFieldPolicy,
	},
	Target?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetKeySpecifier | (() => undefined | TargetKeySpecifier),
		fields?: TargetFieldPolicy,
	},
	TargetAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetAggregateSelectionKeySpecifier | (() => undefined | TargetAggregateSelectionKeySpecifier),
		fields?: TargetAggregateSelectionFieldPolicy,
	},
	TargetArrowArrowsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetArrowArrowsAggregationSelectionKeySpecifier | (() => undefined | TargetArrowArrowsAggregationSelectionKeySpecifier),
		fields?: TargetArrowArrowsAggregationSelectionFieldPolicy,
	},
	TargetArrowArrowsEdgeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetArrowArrowsEdgeAggregateSelectionKeySpecifier | (() => undefined | TargetArrowArrowsEdgeAggregateSelectionKeySpecifier),
		fields?: TargetArrowArrowsEdgeAggregateSelectionFieldPolicy,
	},
	TargetArrowArrowsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetArrowArrowsNodeAggregateSelectionKeySpecifier | (() => undefined | TargetArrowArrowsNodeAggregateSelectionKeySpecifier),
		fields?: TargetArrowArrowsNodeAggregateSelectionFieldPolicy,
	},
	TargetArrowsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetArrowsConnectionKeySpecifier | (() => undefined | TargetArrowsConnectionKeySpecifier),
		fields?: TargetArrowsConnectionFieldPolicy,
	},
	TargetArrowsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetArrowsRelationshipKeySpecifier | (() => undefined | TargetArrowsRelationshipKeySpecifier),
		fields?: TargetArrowsRelationshipFieldPolicy,
	},
	TargetEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetEdgeKeySpecifier | (() => undefined | TargetEdgeKeySpecifier),
		fields?: TargetEdgeFieldPolicy,
	},
	TargetSetSetsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetSetSetsAggregationSelectionKeySpecifier | (() => undefined | TargetSetSetsAggregationSelectionKeySpecifier),
		fields?: TargetSetSetsAggregationSelectionFieldPolicy,
	},
	TargetSetSetsEdgeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetSetSetsEdgeAggregateSelectionKeySpecifier | (() => undefined | TargetSetSetsEdgeAggregateSelectionKeySpecifier),
		fields?: TargetSetSetsEdgeAggregateSelectionFieldPolicy,
	},
	TargetSetSetsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetSetSetsNodeAggregateSelectionKeySpecifier | (() => undefined | TargetSetSetsNodeAggregateSelectionKeySpecifier),
		fields?: TargetSetSetsNodeAggregateSelectionFieldPolicy,
	},
	TargetSetsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetSetsConnectionKeySpecifier | (() => undefined | TargetSetsConnectionKeySpecifier),
		fields?: TargetSetsConnectionFieldPolicy,
	},
	TargetSetsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetSetsRelationshipKeySpecifier | (() => undefined | TargetSetsRelationshipKeySpecifier),
		fields?: TargetSetsRelationshipFieldPolicy,
	},
	TargetsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TargetsConnectionKeySpecifier | (() => undefined | TargetsConnectionKeySpecifier),
		fields?: TargetsConnectionFieldPolicy,
	},
	UpdateArrowsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateArrowsMutationResponseKeySpecifier | (() => undefined | UpdateArrowsMutationResponseKeySpecifier),
		fields?: UpdateArrowsMutationResponseFieldPolicy,
	},
	UpdateAuthenticatorsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateAuthenticatorsMutationResponseKeySpecifier | (() => undefined | UpdateAuthenticatorsMutationResponseKeySpecifier),
		fields?: UpdateAuthenticatorsMutationResponseFieldPolicy,
	},
	UpdateBowsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateBowsMutationResponseKeySpecifier | (() => undefined | UpdateBowsMutationResponseKeySpecifier),
		fields?: UpdateBowsMutationResponseFieldPolicy,
	},
	UpdateCommentsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCommentsMutationResponseKeySpecifier | (() => undefined | UpdateCommentsMutationResponseKeySpecifier),
		fields?: UpdateCommentsMutationResponseFieldPolicy,
	},
	UpdateEnemiesMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateEnemiesMutationResponseKeySpecifier | (() => undefined | UpdateEnemiesMutationResponseKeySpecifier),
		fields?: UpdateEnemiesMutationResponseFieldPolicy,
	},
	UpdateInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateInfoKeySpecifier | (() => undefined | UpdateInfoKeySpecifier),
		fields?: UpdateInfoFieldPolicy,
	},
	UpdateLocationsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateLocationsMutationResponseKeySpecifier | (() => undefined | UpdateLocationsMutationResponseKeySpecifier),
		fields?: UpdateLocationsMutationResponseFieldPolicy,
	},
	UpdateNotesMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateNotesMutationResponseKeySpecifier | (() => undefined | UpdateNotesMutationResponseKeySpecifier),
		fields?: UpdateNotesMutationResponseFieldPolicy,
	},
	UpdateRulesetsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateRulesetsMutationResponseKeySpecifier | (() => undefined | UpdateRulesetsMutationResponseKeySpecifier),
		fields?: UpdateRulesetsMutationResponseFieldPolicy,
	},
	UpdateSessionsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSessionsMutationResponseKeySpecifier | (() => undefined | UpdateSessionsMutationResponseKeySpecifier),
		fields?: UpdateSessionsMutationResponseFieldPolicy,
	},
	UpdateSetsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSetsMutationResponseKeySpecifier | (() => undefined | UpdateSetsMutationResponseKeySpecifier),
		fields?: UpdateSetsMutationResponseFieldPolicy,
	},
	UpdateSyntheticSampleResponsesMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSyntheticSampleResponsesMutationResponseKeySpecifier | (() => undefined | UpdateSyntheticSampleResponsesMutationResponseKeySpecifier),
		fields?: UpdateSyntheticSampleResponsesMutationResponseFieldPolicy,
	},
	UpdateTargetsMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTargetsMutationResponseKeySpecifier | (() => undefined | UpdateTargetsMutationResponseKeySpecifier),
		fields?: UpdateTargetsMutationResponseFieldPolicy,
	},
	UpdateUsersMutationResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUsersMutationResponseKeySpecifier | (() => undefined | UpdateUsersMutationResponseKeySpecifier),
		fields?: UpdateUsersMutationResponseFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAggregateSelectionKeySpecifier | (() => undefined | UserAggregateSelectionKeySpecifier),
		fields?: UserAggregateSelectionFieldPolicy,
	},
	UserArrowArrowsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserArrowArrowsAggregationSelectionKeySpecifier | (() => undefined | UserArrowArrowsAggregationSelectionKeySpecifier),
		fields?: UserArrowArrowsAggregationSelectionFieldPolicy,
	},
	UserArrowArrowsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserArrowArrowsNodeAggregateSelectionKeySpecifier | (() => undefined | UserArrowArrowsNodeAggregateSelectionKeySpecifier),
		fields?: UserArrowArrowsNodeAggregateSelectionFieldPolicy,
	},
	UserArrowsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserArrowsConnectionKeySpecifier | (() => undefined | UserArrowsConnectionKeySpecifier),
		fields?: UserArrowsConnectionFieldPolicy,
	},
	UserArrowsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserArrowsRelationshipKeySpecifier | (() => undefined | UserArrowsRelationshipKeySpecifier),
		fields?: UserArrowsRelationshipFieldPolicy,
	},
	UserAuthenticatorAuthenticatorAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticatorAuthenticatorAggregationSelectionKeySpecifier | (() => undefined | UserAuthenticatorAuthenticatorAggregationSelectionKeySpecifier),
		fields?: UserAuthenticatorAuthenticatorAggregationSelectionFieldPolicy,
	},
	UserAuthenticatorAuthenticatorEdgeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticatorAuthenticatorEdgeAggregateSelectionKeySpecifier | (() => undefined | UserAuthenticatorAuthenticatorEdgeAggregateSelectionKeySpecifier),
		fields?: UserAuthenticatorAuthenticatorEdgeAggregateSelectionFieldPolicy,
	},
	UserAuthenticatorAuthenticatorNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticatorAuthenticatorNodeAggregateSelectionKeySpecifier | (() => undefined | UserAuthenticatorAuthenticatorNodeAggregateSelectionKeySpecifier),
		fields?: UserAuthenticatorAuthenticatorNodeAggregateSelectionFieldPolicy,
	},
	UserAuthenticatorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticatorConnectionKeySpecifier | (() => undefined | UserAuthenticatorConnectionKeySpecifier),
		fields?: UserAuthenticatorConnectionFieldPolicy,
	},
	UserAuthenticatorRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAuthenticatorRelationshipKeySpecifier | (() => undefined | UserAuthenticatorRelationshipKeySpecifier),
		fields?: UserAuthenticatorRelationshipFieldPolicy,
	},
	UserBowBowsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserBowBowsAggregationSelectionKeySpecifier | (() => undefined | UserBowBowsAggregationSelectionKeySpecifier),
		fields?: UserBowBowsAggregationSelectionFieldPolicy,
	},
	UserBowBowsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserBowBowsNodeAggregateSelectionKeySpecifier | (() => undefined | UserBowBowsNodeAggregateSelectionKeySpecifier),
		fields?: UserBowBowsNodeAggregateSelectionFieldPolicy,
	},
	UserBowsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserBowsConnectionKeySpecifier | (() => undefined | UserBowsConnectionKeySpecifier),
		fields?: UserBowsConnectionFieldPolicy,
	},
	UserBowsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserBowsRelationshipKeySpecifier | (() => undefined | UserBowsRelationshipKeySpecifier),
		fields?: UserBowsRelationshipFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	},
	UserSessionSessionsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSessionSessionsAggregationSelectionKeySpecifier | (() => undefined | UserSessionSessionsAggregationSelectionKeySpecifier),
		fields?: UserSessionSessionsAggregationSelectionFieldPolicy,
	},
	UserSessionSessionsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSessionSessionsNodeAggregateSelectionKeySpecifier | (() => undefined | UserSessionSessionsNodeAggregateSelectionKeySpecifier),
		fields?: UserSessionSessionsNodeAggregateSelectionFieldPolicy,
	},
	UserSessionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSessionsConnectionKeySpecifier | (() => undefined | UserSessionsConnectionKeySpecifier),
		fields?: UserSessionsConnectionFieldPolicy,
	},
	UserSessionsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSessionsRelationshipKeySpecifier | (() => undefined | UserSessionsRelationshipKeySpecifier),
		fields?: UserSessionsRelationshipFieldPolicy,
	},
	UserSetSetsAggregationSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSetSetsAggregationSelectionKeySpecifier | (() => undefined | UserSetSetsAggregationSelectionKeySpecifier),
		fields?: UserSetSetsAggregationSelectionFieldPolicy,
	},
	UserSetSetsNodeAggregateSelection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSetSetsNodeAggregateSelectionKeySpecifier | (() => undefined | UserSetSetsNodeAggregateSelectionKeySpecifier),
		fields?: UserSetSetsNodeAggregateSelectionFieldPolicy,
	},
	UserSetsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSetsConnectionKeySpecifier | (() => undefined | UserSetsConnectionKeySpecifier),
		fields?: UserSetsConnectionFieldPolicy,
	},
	UserSetsRelationship?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSetsRelationshipKeySpecifier | (() => undefined | UserSetsRelationshipKeySpecifier),
		fields?: UserSetsRelationshipFieldPolicy,
	},
	UsersConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersConnectionKeySpecifier | (() => undefined | UsersConnectionKeySpecifier),
		fields?: UsersConnectionFieldPolicy,
	},
	_Service?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ServiceKeySpecifier | (() => undefined | _ServiceKeySpecifier),
		fields?: _ServiceFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;