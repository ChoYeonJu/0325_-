package section4;

import java.util.LinkedList;
import java.util.ListIterator;

public class Polynomial {

	public char name;
	public LinkedList<Term> terms;

	public Polynomial(char name) {
		this.name = name;
		terms = new LinkedList<Term>();
	}

	// 기존의 다항식에 새로운 항을 추가하는 메서드
	// 추가하려는 항과 동일 차수의 항이 이미 있는 경우 : 기존 항의 계수만 변경
	// 그렇지 않은 경우 : 새로운 항을 삽입(내림차순으로 항상 정렬됨)
	public void addTerm(int coef, int expo) {

		if (coef == 0) {
			return;
		}
		ListIterator<Term> iter = terms.listIterator();
		while(iter.hasNext()) {
			Term t = iter.next();
			if(t.expo == expo) {
				t.coef += coef;
				if(t.coef == 0) {
					iter.remove();
				}
				return ;
			}
			else if (t.expo < expo) {
				iter.previous();
				iter.add(new Term(coef, expo));
				return ;
			}
		}
		
		iter.add(new Term(coef, expo));
//		Node<Term> p = terms.head, q = null;
//		while (p != null && p.data.expo > expo) {
//			q = p;
//			p = p.next;
//		}
//
//		if (p != null && p.data.expo == expo) {
//			p.data.coef += coef;
//			if (p.data.coef == 0) {
//				// 노드 삭제
//				if (q == null) {
//					terms.removeFirst();
//				} else {
//					terms.removeAfter(q);
//				}
//			}
//		} else { // 새로운 항 추가
//			Term t = new Term(coef, expo);
//			if (q == null) {
//				terms.addFirst(t);
//			} else {
//				terms.addAfter(q, t);
//			}
//		}
	}
	
	public int calc(int x) {
		int result = 0;
		for(Term t : terms)
			result += t.calc(x);
		return result;
		
//		Node<Term> p = terms.head;
//		while(p!=null) {
//			result += p.data.calc(x);
//			p=p.next;
//		}
//		Iterator<Term> iter = terms.iterator();
//		for(int i=0;i<terms.size();i++) {
//			Term t= terms.get(i);
//			result +=t.calc(x);
//		}
//		return result;
	}
	
	public String toString() {
		String result = "";
		for(Term t : terms) {
			result += ("+"+t.toString());
		}
//		String result = "";
//		Node<Term> p = terms.head;
//		while(p!=null) {
//			result += ("+"+p.data.toString());
//			p=p.next;
//		}
		return result;
	}


}
