/*
    Subject: maintains a list of observers, facilitates adding or removing observers
    Observer: provides an update interface for objects that need to be notified of a Subject's changes of state
    ConcreteSubject: broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
    ConcreteObserver: stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's
*/
function ObserverList(){
    this.observerList = [];
  }
   
  ObserverList.prototype.add = function( obj ){
    return this.observerList.push( obj );
  };
   
  ObserverList.prototype.count = function(){
    return this.observerList.length;
  };
   
  ObserverList.prototype.get = function( index ){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
  };
   
  ObserverList.prototype.indexOf = function( obj, startIndex ){
    var i = startIndex;
   
    while( i < this.observerList.length ){
      if( this.observerList[i] === obj ){
        return i;
      }
      i++;
    }
   
    return -1;
  };
   
  ObserverList.prototype.removeAt = function( index ){
    this.observerList.splice( index, 1 );
  };


function Subject(){
    this.observers = new ObserverList();
  }
   
  Subject.prototype.addObserver = function( observer ){
    this.observers.add( observer );
  };
   
  Subject.prototype.removeObserver = function( observer ){
    this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
  };
   
  Subject.prototype.notify = function( context ){
    var observerCount = this.observers.count();
    for(var i=0; i < observerCount; i++){
      this.observers.get(i).update( context );
    }
  };

  // The Observer
  function Observer(){
    this.update = function(){
      // ...
    };
  }

  export { Subject, Observer }