import "./counterWidget.scss";
import { Widget } from "widgetjs";

export default class CounterWidget extends Widget {
	_initialize({ count = 0 , onUpdate}) {
		this._count = count;
		this._onUpdateCallback = onUpdate;
	}

	update() {
		this._onUpdateCallback(this._count);
		return super.update();
	}

	renderContentOn(html) {
		html.h1(this._count.toString());
		html.button("+").click(() => {
			this._count++;
			this.update();
		});
		html.button("-").click(() => {
			this._count--;
			this.update();
		});
	}
}
