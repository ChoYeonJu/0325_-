package section4;

import java.util.Iterator;
import java.util.ListIterator;
import java.util.NoSuchElementException;

import section1.Node;

public class KWLinkedList<E> {

	private Node<E> head = null;
	private Node<E> tail = null;
	private int size = 0;

	private static class Node<T> {
		public T data;
		public Node<T> next;
		public Node<T> previous;

		public Node(T item) {
			data = item;
			next = null;
		}
	}

	public Iterator<E> iterator() {
		return null;
	}

	public ListIterator<E> listIterator() {
		return new KWListIterator(0);
	}

	public ListIterator<E> listIterator(int index) {
		return new KWListIterator(index);
	}

	// iterator<e> 의 서브 인터페이스
	private class KWListIterator implements ListIterator<E> {

		private Node<E> nextItem;
		private Node<E> lastItemReturned;
		private int index;

		public  KWListIterator(int i) {
			// TODO Auto-generated constructor stub
			if (i < 0 || i > size) {
				throw new IndexOutOfBoundsException("invalid index" + i);
			}

			lastItemReturned = null;

			if (i == size) {
				index = size;
				nextItem = null;
			} else {
				nextItem = head;
				for (index = 0; index < i; index++) {
					nextItem = nextItem.next;
				}
			}
		}

		@Override
		public void add(E e) {
			// TODO Auto-generated method stub
			if(head == null) {
				head = new Node<E>(e);
				tail= head;
			}

		}

		@Override
		public boolean hasNext() {
			// TODO Auto-generated method stub
			return false;
		}

		@Override
		public boolean hasPrevious() {
			// TODO Auto-generated method stub
			return (nextItem == null && size != 0)||nextItem.previous != null;
		}

		@Override
		public E next() {
			// TODO Auto-generated method stub
			if(!hasNext()) {
				throw new NoSuchElementException();
			}
			lastItemReturned = nextItem;
			nextItem = nextItem.next;
			index++;
			return lastItemReturned.data;
		}

		@Override
		public int nextIndex() {
			// TODO Auto-generated method stub
			return index;
		}

		@Override
		public E previous() {
			// TODO Auto-generated method stub
			if(!hasPrevious())
				throw new NoSuchElementException();
			
			if(nextItem == null)
				nextItem = tail;
			else
				nextItem = nextItem.previous;
			
			lastItemReturned = nextItem;
			index--;
			return lastItemReturned.data;
		}

		@Override
		public int previousIndex() {
			// TODO Auto-generated method stub
			return index -1;
		}

		@Override
		public void remove() {
			// TODO Auto-generated method stub

		}

		@Override
		public void set(E e) {
			// TODO Auto-generated method stub

		}

	}

//	public int indexOf(E item) {
//		return 0;
//	}
//
//	public void add(int index, E item) {
//
//	}
//
//	public E get(int index) {
//		return null;
//	}
//
//	public boolean remove(int index) {
//		return true;
//	}
//
//	public void remove(E obj) {
//
//	}
//
//	public int size() {
//		return size;
//	}
}
