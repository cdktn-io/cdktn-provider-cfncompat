# `customResource` Submodule <a name="`customResource` Submodule" id="@cdktn/provider-cfncompat.customResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomResource <a name="CustomResource" id="@cdktn/provider-cfncompat.customResource.CustomResource"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource cfncompat_custom_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer"></a>

```python
from cdktn_provider_cfncompat import custom_resource

customResource.CustomResource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  service_token: str,
  logical_resource_id: str = None,
  resource_properties: typing.Mapping[typing.Any] = None,
  resource_type: str = None,
  response_bucket: str = None,
  response_key_prefix: str = None,
  service_timeout: typing.Union[int, float] = None,
  stack_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.serviceToken">service_token</a></code> | <code>str</code> | ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.logicalResourceId">logical_resource_id</a></code> | <code>str</code> | CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.resourceProperties">resource_properties</a></code> | <code>typing.Mapping[typing.Any]</code> | Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | CloudFormation resource type name reported in the request event's `ResourceType` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.responseBucket">response_bucket</a></code> | <code>str</code> | S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.responseKeyPrefix">response_key_prefix</a></code> | <code>str</code> | Optional S3 key prefix for the response object. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.serviceTimeout">service_timeout</a></code> | <code>typing.Union[int, float]</code> | Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.stackId">stack_id</a></code> | <code>str</code> | CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_token`<sup>Required</sup> <a name="service_token" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.serviceToken"></a>

- *Type:* str

ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`).

Must be a Lambda function ARN (`arn:*:lambda:...`, invoked asynchronously) or an SNS topic ARN (`arn:*:sns:...`, published to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#service_token CustomResource#service_token}

---

##### `logical_resource_id`<sup>Optional</sup> <a name="logical_resource_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.logicalResourceId"></a>

- *Type:* str

CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field.

Typically set by a CDK Terrain synthesis backend to the synthesized CloudFormation logical id; defaults to `"CfncompatCustomResource"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#logical_resource_id CustomResource#logical_resource_id}

---

##### `resource_properties`<sup>Optional</sup> <a name="resource_properties" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.resourceProperties"></a>

- *Type:* typing.Mapping[typing.Any]

Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`.

May be an object/map (arbitrarily nested) or omitted entirely. CloudFormation merges `ServiceToken` into this map when delivering it to the handler; this resource replicates that behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#resource_properties CustomResource#resource_properties}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.resourceType"></a>

- *Type:* str

CloudFormation resource type name reported in the request event's `ResourceType` field.

Defaults to `"AWS::CloudFormation::CustomResource"`. May also be set to `Custom::<name>` (matching CloudFormation's convention for named custom resource types), where `<name>` matches `^[A-Za-z0-9_@-]{1,52}$` and the full value is at most 60 characters. Changing this forces replacement: CloudFormation forbids changing a custom resource's type in an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#resource_type CustomResource#resource_type}

---

##### `response_bucket`<sup>Optional</sup> <a name="response_bucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.responseBucket"></a>

- *Type:* str

S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to).

Falls back to the provider's `custom_resource_bucket` if unset; it is an error at apply time if neither is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#response_bucket CustomResource#response_bucket}

---

##### `response_key_prefix`<sup>Optional</sup> <a name="response_key_prefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.responseKeyPrefix"></a>

- *Type:* str

Optional S3 key prefix for the response object.

The full key is `"<response_key_prefix>cfncompat/<RequestId>.json"` -- include a trailing `/` if you want the prefix to behave like a folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#response_key_prefix CustomResource#response_key_prefix}

---

##### `service_timeout`<sup>Optional</sup> <a name="service_timeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.serviceTimeout"></a>

- *Type:* typing.Union[int, float]

Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`.

Must be between 1 and 3600 (CloudFormation's own range). Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#service_timeout CustomResource#service_timeout}

---

##### `stack_id`<sup>Optional</sup> <a name="stack_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.stackId"></a>

- *Type:* str

CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim.

Typically set by a CDK Terrain synthesis backend to a stack identifier; defaults to `"cfncompat/no-stack-id"`.

~> That default is a **shared sentinel**: every `cfncompat_custom_resource` in the workspace that leaves `stack_id` unset sends the same value. Handlers that treat `StackId` as an ownership key then cannot tell one stack's objects from another's -- CDK's S3 notifications handler, for instance, prefixes every notification `Id` with `{StackId}-` and, on delete, removes exactly the notifications carrying that prefix, so two stacks sharing the sentinel would delete each other's notifications. Wire this to `data.cfncompat_pseudo_parameters.<name>.stack_id` with `stack_name` set (that value is deterministic and stable across applies); leaving it unset emits a warning today and is planned to become an error in v1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#stack_id CustomResource#stack_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetLogicalResourceId">reset_logical_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceProperties">reset_resource_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseBucket">reset_response_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseKeyPrefix">reset_response_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetServiceTimeout">reset_service_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetStackId">reset_stack_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cfncompat.customResource.CustomResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cfncompat.customResource.CustomResource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.customResource.CustomResource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cfncompat.customResource.CustomResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cfncompat.customResource.CustomResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cfncompat.customResource.CustomResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cfncompat.customResource.CustomResource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_logical_resource_id` <a name="reset_logical_resource_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetLogicalResourceId"></a>

```python
def reset_logical_resource_id() -> None
```

##### `reset_resource_properties` <a name="reset_resource_properties" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceProperties"></a>

```python
def reset_resource_properties() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_response_bucket` <a name="reset_response_bucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseBucket"></a>

```python
def reset_response_bucket() -> None
```

##### `reset_response_key_prefix` <a name="reset_response_key_prefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseKeyPrefix"></a>

```python
def reset_response_key_prefix() -> None
```

##### `reset_service_timeout` <a name="reset_service_timeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetServiceTimeout"></a>

```python
def reset_service_timeout() -> None
```

##### `reset_stack_id` <a name="reset_stack_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetStackId"></a>

```python
def reset_stack_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CustomResource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct"></a>

```python
from cdktn_provider_cfncompat import custom_resource

customResource.CustomResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement"></a>

```python
from cdktn_provider_cfncompat import custom_resource

customResource.CustomResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource"></a>

```python
from cdktn_provider_cfncompat import custom_resource

customResource.CustomResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport"></a>

```python
from cdktn_provider_cfncompat import custom_resource

customResource.CustomResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CustomResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.data">data</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.physicalResourceId">physical_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceIdInput">logical_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourcePropertiesInput">resource_properties_input</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucketInput">response_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefixInput">response_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeoutInput">service_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTokenInput">service_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.stackIdInput">stack_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceId">logical_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceProperties">resource_properties</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucket">response_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefix">response_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeout">service_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceToken">service_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.data"></a>

```python
data: AnyMap
```

- *Type:* cdktn.AnyMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `physical_resource_id`<sup>Required</sup> <a name="physical_resource_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.physicalResourceId"></a>

```python
physical_resource_id: str
```

- *Type:* str

---

##### `logical_resource_id_input`<sup>Optional</sup> <a name="logical_resource_id_input" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceIdInput"></a>

```python
logical_resource_id_input: str
```

- *Type:* str

---

##### `resource_properties_input`<sup>Optional</sup> <a name="resource_properties_input" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourcePropertiesInput"></a>

```python
resource_properties_input: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `response_bucket_input`<sup>Optional</sup> <a name="response_bucket_input" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucketInput"></a>

```python
response_bucket_input: str
```

- *Type:* str

---

##### `response_key_prefix_input`<sup>Optional</sup> <a name="response_key_prefix_input" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefixInput"></a>

```python
response_key_prefix_input: str
```

- *Type:* str

---

##### `service_timeout_input`<sup>Optional</sup> <a name="service_timeout_input" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeoutInput"></a>

```python
service_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_token_input`<sup>Optional</sup> <a name="service_token_input" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTokenInput"></a>

```python
service_token_input: str
```

- *Type:* str

---

##### `stack_id_input`<sup>Optional</sup> <a name="stack_id_input" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.stackIdInput"></a>

```python
stack_id_input: str
```

- *Type:* str

---

##### `logical_resource_id`<sup>Required</sup> <a name="logical_resource_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceId"></a>

```python
logical_resource_id: str
```

- *Type:* str

---

##### `resource_properties`<sup>Required</sup> <a name="resource_properties" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceProperties"></a>

```python
resource_properties: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `response_bucket`<sup>Required</sup> <a name="response_bucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucket"></a>

```python
response_bucket: str
```

- *Type:* str

---

##### `response_key_prefix`<sup>Required</sup> <a name="response_key_prefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefix"></a>

```python
response_key_prefix: str
```

- *Type:* str

---

##### `service_timeout`<sup>Required</sup> <a name="service_timeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeout"></a>

```python
service_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_token`<sup>Required</sup> <a name="service_token" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceToken"></a>

```python
service_token: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomResourceConfig <a name="CustomResourceConfig" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.Initializer"></a>

```python
from cdktn_provider_cfncompat import custom_resource

customResource.CustomResourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  service_token: str,
  logical_resource_id: str = None,
  resource_properties: typing.Mapping[typing.Any] = None,
  resource_type: str = None,
  response_bucket: str = None,
  response_key_prefix: str = None,
  service_timeout: typing.Union[int, float] = None,
  stack_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceToken">service_token</a></code> | <code>str</code> | ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.logicalResourceId">logical_resource_id</a></code> | <code>str</code> | CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceProperties">resource_properties</a></code> | <code>typing.Mapping[typing.Any]</code> | Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceType">resource_type</a></code> | <code>str</code> | CloudFormation resource type name reported in the request event's `ResourceType` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseBucket">response_bucket</a></code> | <code>str</code> | S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseKeyPrefix">response_key_prefix</a></code> | <code>str</code> | Optional S3 key prefix for the response object. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceTimeout">service_timeout</a></code> | <code>typing.Union[int, float]</code> | Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.stackId">stack_id</a></code> | <code>str</code> | CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `service_token`<sup>Required</sup> <a name="service_token" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceToken"></a>

```python
service_token: str
```

- *Type:* str

ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`).

Must be a Lambda function ARN (`arn:*:lambda:...`, invoked asynchronously) or an SNS topic ARN (`arn:*:sns:...`, published to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#service_token CustomResource#service_token}

---

##### `logical_resource_id`<sup>Optional</sup> <a name="logical_resource_id" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.logicalResourceId"></a>

```python
logical_resource_id: str
```

- *Type:* str

CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field.

Typically set by a CDK Terrain synthesis backend to the synthesized CloudFormation logical id; defaults to `"CfncompatCustomResource"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#logical_resource_id CustomResource#logical_resource_id}

---

##### `resource_properties`<sup>Optional</sup> <a name="resource_properties" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceProperties"></a>

```python
resource_properties: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`.

May be an object/map (arbitrarily nested) or omitted entirely. CloudFormation merges `ServiceToken` into this map when delivering it to the handler; this resource replicates that behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#resource_properties CustomResource#resource_properties}

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

CloudFormation resource type name reported in the request event's `ResourceType` field.

Defaults to `"AWS::CloudFormation::CustomResource"`. May also be set to `Custom::<name>` (matching CloudFormation's convention for named custom resource types), where `<name>` matches `^[A-Za-z0-9_@-]{1,52}$` and the full value is at most 60 characters. Changing this forces replacement: CloudFormation forbids changing a custom resource's type in an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#resource_type CustomResource#resource_type}

---

##### `response_bucket`<sup>Optional</sup> <a name="response_bucket" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseBucket"></a>

```python
response_bucket: str
```

- *Type:* str

S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to).

Falls back to the provider's `custom_resource_bucket` if unset; it is an error at apply time if neither is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#response_bucket CustomResource#response_bucket}

---

##### `response_key_prefix`<sup>Optional</sup> <a name="response_key_prefix" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseKeyPrefix"></a>

```python
response_key_prefix: str
```

- *Type:* str

Optional S3 key prefix for the response object.

The full key is `"<response_key_prefix>cfncompat/<RequestId>.json"` -- include a trailing `/` if you want the prefix to behave like a folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#response_key_prefix CustomResource#response_key_prefix}

---

##### `service_timeout`<sup>Optional</sup> <a name="service_timeout" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceTimeout"></a>

```python
service_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`.

Must be between 1 and 3600 (CloudFormation's own range). Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#service_timeout CustomResource#service_timeout}

---

##### `stack_id`<sup>Optional</sup> <a name="stack_id" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim.

Typically set by a CDK Terrain synthesis backend to a stack identifier; defaults to `"cfncompat/no-stack-id"`.

~> That default is a **shared sentinel**: every `cfncompat_custom_resource` in the workspace that leaves `stack_id` unset sends the same value. Handlers that treat `StackId` as an ownership key then cannot tell one stack's objects from another's -- CDK's S3 notifications handler, for instance, prefixes every notification `Id` with `{StackId}-` and, on delete, removes exactly the notifications carrying that prefix, so two stacks sharing the sentinel would delete each other's notifications. Wire this to `data.cfncompat_pseudo_parameters.<name>.stack_id` with `stack_name` set (that value is deterministic and stable across applies); leaving it unset emits a warning today and is planned to become an error in v1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#stack_id CustomResource#stack_id}

---



