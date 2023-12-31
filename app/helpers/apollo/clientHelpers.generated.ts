import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type BookKeySpecifier = ('authorName' | 'id' | 'snaps' | 'tags' | 'title' | 'url' | BookKeySpecifier)[];
export type BookFieldPolicy = {
	authorName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	snaps?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateBookPayloadKeySpecifier = ('book' | 'clientMutationId' | 'errors' | 'success' | CreateBookPayloadKeySpecifier)[];
export type CreateBookPayloadFieldPolicy = {
	book?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateSnapPayloadKeySpecifier = ('clientMutationId' | 'errors' | 'snap' | 'success' | CreateSnapPayloadKeySpecifier)[];
export type CreateSnapPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	snap?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteSnapPayloadKeySpecifier = ('book' | 'clientMutationId' | 'errors' | 'success' | DeleteSnapPayloadKeySpecifier)[];
export type DeleteSnapPayloadFieldPolicy = {
	book?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImageKeySpecifier = ('id' | 'signedId' | 'url' | ImageKeySpecifier)[];
export type ImageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	signedId?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InputFieldErrorKeySpecifier = ('field' | 'message' | InputFieldErrorKeySpecifier)[];
export type InputFieldErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createBook' | 'createSnap' | 'deleteSnap' | 'testMutation' | 'updateBook' | 'updateUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createBook?: FieldPolicy<any> | FieldReadFunction<any>,
	createSnap?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSnap?: FieldPolicy<any> | FieldReadFunction<any>,
	testMutation?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBook?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('activityStatus' | 'announcement' | 'book' | 'bootedAt' | 'contactEmail' | 'imageBySignedId' | 'passwordStrength' | 'snap' | 'testEcho' | 'user' | 'viewer' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	activityStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	announcement?: FieldPolicy<any> | FieldReadFunction<any>,
	book?: FieldPolicy<any> | FieldReadFunction<any>,
	bootedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	contactEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	imageBySignedId?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordStrength?: FieldPolicy<any> | FieldReadFunction<any>,
	snap?: FieldPolicy<any> | FieldReadFunction<any>,
	testEcho?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SnapKeySpecifier = ('book' | 'id' | 'photo' | 'tags' | 'text' | 'wasProcessed' | SnapKeySpecifier)[];
export type SnapFieldPolicy = {
	book?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	wasProcessed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('activityStatus' | 'testSubscription' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	activityStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	testSubscription?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TestModelKeySpecifier = ('birthday' | 'id' | 'name' | TestModelKeySpecifier)[];
export type TestModelFieldPolicy = {
	birthday?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TestMutationPayloadKeySpecifier = ('clientMutationId' | 'errors' | 'model' | 'success' | TestMutationPayloadKeySpecifier)[];
export type TestMutationPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateBookPayloadKeySpecifier = ('book' | 'clientMutationId' | 'errors' | 'success' | UpdateBookPayloadKeySpecifier)[];
export type UpdateBookPayloadFieldPolicy = {
	book?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUserPayloadKeySpecifier = ('clientMutationId' | 'errors' | 'success' | 'user' | UpdateUserPayloadKeySpecifier)[];
export type UpdateUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('avatarUrl' | 'books' | 'email' | 'firstName' | 'id' | 'initials' | 'isAdmin' | 'lastName' | 'name' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	avatarUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	books?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initials?: FieldPolicy<any> | FieldReadFunction<any>,
	isAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Book?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BookKeySpecifier | (() => undefined | BookKeySpecifier),
		fields?: BookFieldPolicy,
	},
	CreateBookPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateBookPayloadKeySpecifier | (() => undefined | CreateBookPayloadKeySpecifier),
		fields?: CreateBookPayloadFieldPolicy,
	},
	CreateSnapPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateSnapPayloadKeySpecifier | (() => undefined | CreateSnapPayloadKeySpecifier),
		fields?: CreateSnapPayloadFieldPolicy,
	},
	DeleteSnapPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteSnapPayloadKeySpecifier | (() => undefined | DeleteSnapPayloadKeySpecifier),
		fields?: DeleteSnapPayloadFieldPolicy,
	},
	Image?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImageKeySpecifier | (() => undefined | ImageKeySpecifier),
		fields?: ImageFieldPolicy,
	},
	InputFieldError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InputFieldErrorKeySpecifier | (() => undefined | InputFieldErrorKeySpecifier),
		fields?: InputFieldErrorFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Snap?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SnapKeySpecifier | (() => undefined | SnapKeySpecifier),
		fields?: SnapFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	TestModel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TestModelKeySpecifier | (() => undefined | TestModelKeySpecifier),
		fields?: TestModelFieldPolicy,
	},
	TestMutationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TestMutationPayloadKeySpecifier | (() => undefined | TestMutationPayloadKeySpecifier),
		fields?: TestMutationPayloadFieldPolicy,
	},
	UpdateBookPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateBookPayloadKeySpecifier | (() => undefined | UpdateBookPayloadKeySpecifier),
		fields?: UpdateBookPayloadFieldPolicy,
	},
	UpdateUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUserPayloadKeySpecifier | (() => undefined | UpdateUserPayloadKeySpecifier),
		fields?: UpdateUserPayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;