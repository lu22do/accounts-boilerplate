Stuffs = new Mongo.Collection('stuffs');

SuffsSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'Name'
  },
  'owner': {
    type: String,
    label: 'Owner UserId'
  },
  'attribute': {
    type: String,
    label: 'Generic attribute'
  },
  'created': {
    type: Date,
    label: 'Creation date',
    denyUpdate: true,
    autoValue: function() {
      if ( this.isInsert ) {
        return new Date();
      }
    }
  },
});

Stuffs.attachSchema(SuffsSchema);
