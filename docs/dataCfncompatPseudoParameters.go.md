# `dataCfncompatPseudoParameters` Submodule <a name="`dataCfncompatPseudoParameters` Submodule" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCfncompatPseudoParameters <a name="DataCfncompatPseudoParameters" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters cfncompat_pseudo_parameters}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatpseudoparameters"

datacfncompatpseudoparameters.NewDataCfncompatPseudoParameters(scope Construct, id *string, config DataCfncompatPseudoParametersConfig) DataCfncompatPseudoParameters
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig">DataCfncompatPseudoParametersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig">DataCfncompatPseudoParametersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetNotificationArns">ResetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetStackName">ResetStackName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetNotificationArns` <a name="ResetNotificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetNotificationArns"></a>

```go
func ResetNotificationArns()
```

##### `ResetStackName` <a name="ResetStackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetStackName"></a>

```go
func ResetStackName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCfncompatPseudoParameters resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatpseudoparameters"

datacfncompatpseudoparameters.DataCfncompatPseudoParameters_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatpseudoparameters"

datacfncompatpseudoparameters.DataCfncompatPseudoParameters_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatpseudoparameters"

datacfncompatpseudoparameters.DataCfncompatPseudoParameters_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatpseudoparameters"

datacfncompatpseudoparameters.DataCfncompatPseudoParameters_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCfncompatPseudoParameters resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCfncompatPseudoParameters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCfncompatPseudoParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCfncompatPseudoParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.urlSuffix">UrlSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArnsInput">NotificationArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackNameInput">StackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArns">NotificationArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackName">StackName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

##### `UrlSuffix`<sup>Required</sup> <a name="UrlSuffix" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.urlSuffix"></a>

```go
func UrlSuffix() *string
```

- *Type:* *string

---

##### `NotificationArnsInput`<sup>Optional</sup> <a name="NotificationArnsInput" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArnsInput"></a>

```go
func NotificationArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StackNameInput`<sup>Optional</sup> <a name="StackNameInput" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackNameInput"></a>

```go
func StackNameInput() *string
```

- *Type:* *string

---

##### `NotificationArns`<sup>Required</sup> <a name="NotificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArns"></a>

```go
func NotificationArns() *[]*string
```

- *Type:* *[]*string

---

##### `StackName`<sup>Required</sup> <a name="StackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackName"></a>

```go
func StackName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCfncompatPseudoParametersConfig <a name="DataCfncompatPseudoParametersConfig" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatpseudoparameters"

&datacfncompatpseudoparameters.DataCfncompatPseudoParametersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	NotificationArns: *[]*string,
	StackName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.notificationArns">NotificationArns</a></code> | <code>*[]*string</code> | CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.stackName">StackName</a></code> | <code>*string</code> | CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotificationArns`<sup>Optional</sup> <a name="NotificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.notificationArns"></a>

```go
NotificationArns *[]*string
```

- *Type:* *[]*string

CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#notification_arns DataCfncompatPseudoParameters#notification_arns}

---

##### `StackName`<sup>Optional</sup> <a name="StackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.stackName"></a>

```go
StackName *string
```

- *Type:* *string

CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist).

It is also the only input `stack_id` is derived from: leaving it null makes `stack_id` null, and a `cfncompat_custom_resource.stack_id` fed from a null value falls back to that resource's shared `"cfncompat/no-stack-id"` default -- which every stack in the workspace shares. Set `stack_name` whenever a custom-resource handler keys on `StackId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#stack_name DataCfncompatPseudoParameters#stack_name}

---



