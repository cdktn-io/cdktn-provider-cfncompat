# `dataCfncompatAvailabilityZones` Submodule <a name="`dataCfncompatAvailabilityZones` Submodule" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCfncompatAvailabilityZones <a name="DataCfncompatAvailabilityZones" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones cfncompat_availability_zones}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatavailabilityzones"

datacfncompatavailabilityzones.NewDataCfncompatAvailabilityZones(scope Construct, id *string, config DataCfncompatAvailabilityZonesConfig) DataCfncompatAvailabilityZones
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig">DataCfncompatAvailabilityZonesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig">DataCfncompatAvailabilityZonesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCfncompatAvailabilityZones resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatavailabilityzones"

datacfncompatavailabilityzones.DataCfncompatAvailabilityZones_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatavailabilityzones"

datacfncompatavailabilityzones.DataCfncompatAvailabilityZones_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatavailabilityzones"

datacfncompatavailabilityzones.DataCfncompatAvailabilityZones_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatavailabilityzones"

datacfncompatavailabilityzones.DataCfncompatAvailabilityZones_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCfncompatAvailabilityZones resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCfncompatAvailabilityZones to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCfncompatAvailabilityZones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCfncompatAvailabilityZones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.allNames">AllNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.names">Names</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.zoneIds">ZoneIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AllNames`<sup>Required</sup> <a name="AllNames" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.allNames"></a>

```go
func AllNames() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.names"></a>

```go
func Names() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneIds`<sup>Required</sup> <a name="ZoneIds" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.zoneIds"></a>

```go
func ZoneIds() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCfncompatAvailabilityZonesConfig <a name="DataCfncompatAvailabilityZonesConfig" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cfncompat-go/cfncompat/datacfncompatavailabilityzones"

&datacfncompatavailabilityzones.DataCfncompatAvailabilityZonesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.region">Region</a></code> | <code>*string</code> | The region to list Availability Zones for, i.e. the `Fn::GetAZs` argument. An empty string or an unset value means the provider's own region -- exactly as [the `Fn::GetAZs` reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-getavailabilityzones.html) specifies that "specifying an empty string is equivalent to specifying `AWS::Region`". Echoed back as the region that was actually queried. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region to list Availability Zones for, i.e. the `Fn::GetAZs` argument. An empty string or an unset value means the provider's own region -- exactly as [the `Fn::GetAZs` reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-getavailabilityzones.html) specifies that "specifying an empty string is equivalent to specifying `AWS::Region`". Echoed back as the region that was actually queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones#region DataCfncompatAvailabilityZones#region}

---



