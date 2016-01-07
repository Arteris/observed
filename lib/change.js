
module.exports = exports = Change;

/*!
 * Change object constructor
 *
 * The `change` object passed to Object.observe callbacks
 * is immutable so we create a new one to modify.
 */

function Change (path, change) {
  this.path = path;
  this.name = change.name;
  this.type = change.type;
  this.object = change.object;
  this.value = change.name ? change.object[change.name] : change.object;
  this.oldValue = change.oldValue;
  this.index = change.index;
  this.removed = change.removed;
  this.added = Array.isArray(change.object) ? change.object.slice(change.index, change.index + change.addedCount) : undefined;
  this.addedCount = change.addedCount;
}

