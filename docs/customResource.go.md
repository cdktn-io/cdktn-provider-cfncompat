# `customResource` Submodule <a name="`customResource` Submodule" id="@cdktn/provider-cfncompat.customResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomResource <a name="CustomResource" id="@cdktn/provider-cfncompat.customResource.CustomResource"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource cfncompat_custom_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/customresource"

customresource.NewCustomResource(scope Construct, id *string, config CustomResourceConfig) CustomResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig">CustomResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig">CustomResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetLogicalResourceId">ResetLogicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceProperties">ResetResourceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseBucket">ResetResponseBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseKeyPrefix">ResetResponseKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetServiceTimeout">ResetServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetStackId">ResetStackId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cfncompat.customResource.CustomResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cfncompat.customResource.CustomResource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.customResource.CustomResource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cfncompat.customResource.CustomResource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cfncompat.customResource.CustomResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cfncompat.customResource.CustomResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cfncompat.customResource.CustomResource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetLogicalResourceId` <a name="ResetLogicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetLogicalResourceId"></a>

```go
func ResetLogicalResourceId()
```

##### `ResetResourceProperties` <a name="ResetResourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceProperties"></a>

```go
func ResetResourceProperties()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetResponseBucket` <a name="ResetResponseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseBucket"></a>

```go
func ResetResponseBucket()
```

##### `ResetResponseKeyPrefix` <a name="ResetResponseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseKeyPrefix"></a>

```go
func ResetResponseKeyPrefix()
```

##### `ResetServiceTimeout` <a name="ResetServiceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetServiceTimeout"></a>

```go
func ResetServiceTimeout()
```

##### `ResetStackId` <a name="ResetStackId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetStackId"></a>

```go
func ResetStackId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomResource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/customresource"

customresource.CustomResource_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/customresource"

customresource.CustomResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/customresource"

customresource.CustomResource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/customresource"

customresource.CustomResource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CustomResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CustomResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CustomResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CustomResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.data">Data</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.physicalResourceId">PhysicalResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceIdInput">LogicalResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourcePropertiesInput">ResourcePropertiesInput</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucketInput">ResponseBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefixInput">ResponseKeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeoutInput">ServiceTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.stackIdInput">StackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceId">LogicalResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceProperties">ResourceProperties</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucket">ResponseBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefix">ResponseKeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeout">ServiceTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceToken">ServiceToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.data"></a>

```go
func Data() AnyMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PhysicalResourceId`<sup>Required</sup> <a name="PhysicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.physicalResourceId"></a>

```go
func PhysicalResourceId() *string
```

- *Type:* *string

---

##### `LogicalResourceIdInput`<sup>Optional</sup> <a name="LogicalResourceIdInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceIdInput"></a>

```go
func LogicalResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourcePropertiesInput`<sup>Optional</sup> <a name="ResourcePropertiesInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourcePropertiesInput"></a>

```go
func ResourcePropertiesInput() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `ResponseBucketInput`<sup>Optional</sup> <a name="ResponseBucketInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucketInput"></a>

```go
func ResponseBucketInput() *string
```

- *Type:* *string

---

##### `ResponseKeyPrefixInput`<sup>Optional</sup> <a name="ResponseKeyPrefixInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefixInput"></a>

```go
func ResponseKeyPrefixInput() *string
```

- *Type:* *string

---

##### `ServiceTimeoutInput`<sup>Optional</sup> <a name="ServiceTimeoutInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeoutInput"></a>

```go
func ServiceTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTokenInput"></a>

```go
func ServiceTokenInput() *string
```

- *Type:* *string

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.stackIdInput"></a>

```go
func StackIdInput() *string
```

- *Type:* *string

---

##### `LogicalResourceId`<sup>Required</sup> <a name="LogicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceId"></a>

```go
func LogicalResourceId() *string
```

- *Type:* *string

---

##### `ResourceProperties`<sup>Required</sup> <a name="ResourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceProperties"></a>

```go
func ResourceProperties() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ResponseBucket`<sup>Required</sup> <a name="ResponseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucket"></a>

```go
func ResponseBucket() *string
```

- *Type:* *string

---

##### `ResponseKeyPrefix`<sup>Required</sup> <a name="ResponseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefix"></a>

```go
func ResponseKeyPrefix() *string
```

- *Type:* *string

---

##### `ServiceTimeout`<sup>Required</sup> <a name="ServiceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeout"></a>

```go
func ServiceTimeout() *f64
```

- *Type:* *f64

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceToken"></a>

```go
func ServiceToken() *string
```

- *Type:* *string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomResourceConfig <a name="CustomResourceConfig" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/customresource"

&customresource.CustomResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ServiceToken: *string,
	LogicalResourceId: *string,
	ResourceProperties: *map[string]interface{},
	ResourceType: *string,
	ResponseBucket: *string,
	ResponseKeyPrefix: *string,
	ServiceTimeout: *f64,
	StackId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceToken">ServiceToken</a></code> | <code>*string</code> | ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.logicalResourceId">LogicalResourceId</a></code> | <code>*string</code> | CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceProperties">ResourceProperties</a></code> | <code>*map[string]interface{}</code> | Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | CloudFormation resource type name reported in the request event's `ResourceType` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseBucket">ResponseBucket</a></code> | <code>*string</code> | S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseKeyPrefix">ResponseKeyPrefix</a></code> | <code>*string</code> | Optional S3 key prefix for the response object. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceTimeout">ServiceTimeout</a></code> | <code>*f64</code> | Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.stackId">StackId</a></code> | <code>*string</code> | CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceToken"></a>

```go
ServiceToken *string
```

- *Type:* *string

ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`).

Must be a Lambda function ARN (`arn:*:lambda:...`, invoked asynchronously) or an SNS topic ARN (`arn:*:sns:...`, published to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#service_token CustomResource#service_token}

---

##### `LogicalResourceId`<sup>Optional</sup> <a name="LogicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.logicalResourceId"></a>

```go
LogicalResourceId *string
```

- *Type:* *string

CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field.

Typically set by a CDK Terrain synthesis backend to the synthesized CloudFormation logical id; defaults to `"CfncompatCustomResource"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#logical_resource_id CustomResource#logical_resource_id}

---

##### `ResourceProperties`<sup>Optional</sup> <a name="ResourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceProperties"></a>

```go
ResourceProperties *map[string]interface{}
```

- *Type:* *map[string]interface{}

Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`.

May be an object/map (arbitrarily nested) or omitted entirely. CloudFormation merges `ServiceToken` into this map when delivering it to the handler; this resource replicates that behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#resource_properties CustomResource#resource_properties}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

CloudFormation resource type name reported in the request event's `ResourceType` field.

Defaults to `"AWS::CloudFormation::CustomResource"`. May also be set to `Custom::<name>` (matching CloudFormation's convention for named custom resource types), where `<name>` matches `^[A-Za-z0-9_@-]{1,52}$` and the full value is at most 60 characters. Changing this forces replacement: CloudFormation forbids changing a custom resource's type in an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#resource_type CustomResource#resource_type}

---

##### `ResponseBucket`<sup>Optional</sup> <a name="ResponseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseBucket"></a>

```go
ResponseBucket *string
```

- *Type:* *string

S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to).

Falls back to the provider's `custom_resource_bucket` if unset; it is an error at apply time if neither is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#response_bucket CustomResource#response_bucket}

---

##### `ResponseKeyPrefix`<sup>Optional</sup> <a name="ResponseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseKeyPrefix"></a>

```go
ResponseKeyPrefix *string
```

- *Type:* *string

Optional S3 key prefix for the response object.

The full key is `"<response_key_prefix>cfncompat/<RequestId>.json"` -- include a trailing `/` if you want the prefix to behave like a folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#response_key_prefix CustomResource#response_key_prefix}

---

##### `ServiceTimeout`<sup>Optional</sup> <a name="ServiceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceTimeout"></a>

```go
ServiceTimeout *f64
```

- *Type:* *f64

Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`.

Must be between 1 and 3600 (CloudFormation's own range). Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#service_timeout CustomResource#service_timeout}

---

##### `StackId`<sup>Optional</sup> <a name="StackId" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.stackId"></a>

```go
StackId *string
```

- *Type:* *string

CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim.

Typically set by a CDK Terrain synthesis backend to a stack identifier; defaults to `"cfncompat/no-stack-id"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#stack_id CustomResource#stack_id}

---



