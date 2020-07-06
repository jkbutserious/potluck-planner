import {AggregateEvents} from './../src/aggregateEvents.js';

describe('Aggregate Events and related object methods', ()=>{
  let reusableEventIndex;

  beforeEach(()=>{
    reusableEventIndex = new AggregateEvents;
  })

  test('create new AggregateEvents object', ()=>{
    expect(reusableEventIndex.events).toEqual([]);
  })

  test('add recipe to AggregateRecipe object', ()=>{
    reusableEventIndex.addEvent('testEvent');
    expect(reusableEventIndex.events).toEqual(['testEvent']);
  })
})