import os
import json
from flask import Blueprint, jsonify, request

themes_bp = Blueprint("themes", __name__)

# Path to themes.json
THEMES_FILE = os.path.join(os.path.dirname(__file__), "../data/themes.json")

# Load themes from file
def load_themes():
    if not os.path.exists(THEMES_FILE):
        return []
    with open(THEMES_FILE, "r") as file:
        return json.load(file)

# Save themes to file
def save_themes(themes):
    with open(THEMES_FILE, "w") as file:
        json.dump(themes, file, indent=4)

# Get all themes
@themes_bp.route("/themes", methods=["GET"])
def get_themes():
    try:
        themes = load_themes()
        return jsonify(themes), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Add or update a theme
@themes_bp.route("/themes", methods=["POST"])
def add_or_update_theme():
    try:
        data = request.get_json()
        themes = load_themes()

        # Check if theme already exists
        for theme in themes:
            if theme["name"] == data["name"]:
                theme.update(data)
                save_themes(themes)
                return jsonify({"message": "Theme updated successfully"}), 200

        # Add new theme
        themes.append(data)
        save_themes(themes)
        return jsonify({"message": "Theme added successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
