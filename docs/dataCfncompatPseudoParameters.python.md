# `dataCfncompatPseudoParameters` Submodule <a name="`dataCfncompatPseudoParameters` Submodule" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCfncompatPseudoParameters <a name="DataCfncompatPseudoParameters" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters cfncompat_pseudo_parameters}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer"></a>

```python
from cdktn_provider_cfncompat import data_cfncompat_pseudo_parameters

dataCfncompatPseudoParameters.DataCfncompatPseudoParameters(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  notification_arns: typing.List[str] = None,
  stack_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.notificationArns">notification_arns</a></code> | <code>typing.List[str]</code> | CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.stackName">stack_name</a></code> | <code>str</code> | CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `notification_arns`<sup>Optional</sup> <a name="notification_arns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.notificationArns"></a>

- *Type:* typing.List[str]

CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#notification_arns DataCfncompatPseudoParameters#notification_arns}

---

##### `stack_name`<sup>Optional</sup> <a name="stack_name" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.stackName"></a>

- *Type:* str

CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist).

It is also the only input `stack_id` is derived from: leaving it null makes `stack_id` null, and a `cfncompat_custom_resource.stack_id` fed from a null value falls back to that resource's shared `"cfncompat/no-stack-id"` default -- which every stack in the workspace shares. Set `stack_name` whenever a custom-resource handler keys on `StackId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#stack_name DataCfncompatPseudoParameters#stack_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetNotificationArns">reset_notification_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetStackName">reset_stack_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_notification_arns` <a name="reset_notification_arns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetNotificationArns"></a>

```python
def reset_notification_arns() -> None
```

##### `reset_stack_name` <a name="reset_stack_name" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetStackName"></a>

```python
def reset_stack_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataCfncompatPseudoParameters resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct"></a>

```python
from cdktn_provider_cfncompat import data_cfncompat_pseudo_parameters

dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement"></a>

```python
from cdktn_provider_cfncompat import data_cfncompat_pseudo_parameters

dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource"></a>

```python
from cdktn_provider_cfncompat import data_cfncompat_pseudo_parameters

dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport"></a>

```python
from cdktn_provider_cfncompat import data_cfncompat_pseudo_parameters

dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataCfncompatPseudoParameters resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCfncompatPseudoParameters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCfncompatPseudoParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCfncompatPseudoParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.urlSuffix">url_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArnsInput">notification_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackNameInput">stack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArns">notification_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackName">stack_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `url_suffix`<sup>Required</sup> <a name="url_suffix" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.urlSuffix"></a>

```python
url_suffix: str
```

- *Type:* str

---

##### `notification_arns_input`<sup>Optional</sup> <a name="notification_arns_input" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArnsInput"></a>

```python
notification_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stack_name_input`<sup>Optional</sup> <a name="stack_name_input" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackNameInput"></a>

```python
stack_name_input: str
```

- *Type:* str

---

##### `notification_arns`<sup>Required</sup> <a name="notification_arns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArns"></a>

```python
notification_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stack_name`<sup>Required</sup> <a name="stack_name" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackName"></a>

```python
stack_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCfncompatPseudoParametersConfig <a name="DataCfncompatPseudoParametersConfig" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.Initializer"></a>

```python
from cdktn_provider_cfncompat import data_cfncompat_pseudo_parameters

dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  notification_arns: typing.List[str] = None,
  stack_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.notificationArns">notification_arns</a></code> | <code>typing.List[str]</code> | CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.stackName">stack_name</a></code> | <code>str</code> | CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `notification_arns`<sup>Optional</sup> <a name="notification_arns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.notificationArns"></a>

```python
notification_arns: typing.List[str]
```

- *Type:* typing.List[str]

CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#notification_arns DataCfncompatPseudoParameters#notification_arns}

---

##### `stack_name`<sup>Optional</sup> <a name="stack_name" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.stackName"></a>

```python
stack_name: str
```

- *Type:* str

CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist).

It is also the only input `stack_id` is derived from: leaving it null makes `stack_id` null, and a `cfncompat_custom_resource.stack_id` fed from a null value falls back to that resource's shared `"cfncompat/no-stack-id"` default -- which every stack in the workspace shares. Set `stack_name` whenever a custom-resource handler keys on `StackId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#stack_name DataCfncompatPseudoParameters#stack_name}

---



